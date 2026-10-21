package de.kili.glasshome

import android.app.Activity
import android.app.Dialog
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.provider.Settings
import android.view.LayoutInflater
import android.view.View
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import java.util.Calendar
import kotlin.concurrent.thread

class MainActivity : Activity() {
    private val app get() = App.instance

    private lateinit var wallpaper: ImageView
    private lateinit var greeting: TextView
    private lateinit var remotePill: TextView
    private lateinit var favList: RecyclerView
    private lateinit var allList: RecyclerView
    private lateinit var favEmpty: View
    private lateinit var favAdapter: TileAdapter
    private lateinit var allAdapter: TileAdapter

    private var appliedWallpaper = -1L

    @Volatile
    var activeDialog: Dialog? = null
        private set

    private val changeListener: () -> Unit = {
        applyWallpaper()
        refresh()
    }

    private val packageReceiver = object : BroadcastReceiver() {
        override fun onReceive(context: Context, intent: Intent) {
            app.apps.invalidate()
            refresh()
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        wallpaper = findViewById(R.id.wallpaper)
        greeting = findViewById(R.id.greeting)
        remotePill = findViewById(R.id.pill_remote)
        favList = findViewById(R.id.favorites)
        allList = findViewById(R.id.all_apps)
        favEmpty = findViewById(R.id.fav_empty)

        favAdapter = TileAdapter(big = true, onClick = ::launch, onMenu = ::favoriteMenu)
        allAdapter = TileAdapter(big = false, onClick = ::launch, onMenu = ::appMenu)
        favList.layoutManager = LinearLayoutManager(this, RecyclerView.HORIZONTAL, false)
        allList.layoutManager = LinearLayoutManager(this, RecyclerView.HORIZONTAL, false)
        favList.adapter = favAdapter
        allList.adapter = allAdapter
        favList.itemAnimator = null
        allList.itemAnimator = null

        findViewById<View>(R.id.pill_inputs).setOnClickListener { showInputs() }
        findViewById<View>(R.id.pill_wallpaper).setOnClickListener { showWallpapers() }
        findViewById<View>(R.id.pill_settings).setOnClickListener { showSettings() }
        remotePill.setOnClickListener { showRemoteInfo() }

        app.addListener(changeListener)
        val filter = IntentFilter().apply {
            addAction(Intent.ACTION_PACKAGE_ADDED)
            addAction(Intent.ACTION_PACKAGE_REMOVED)
            addAction(Intent.ACTION_PACKAGE_CHANGED)
            addDataScheme("package")
        }
        if (Build.VERSION.SDK_INT >= 33) {
            registerReceiver(packageReceiver, filter, Context.RECEIVER_EXPORTED)
        } else {
            registerReceiver(packageReceiver, filter)
        }
    }

    override fun onResume() {
        super.onResume()
        foreground = this
        applyWallpaper()
        updateHeader()
        refresh()
        if (currentFocus == null) focusFirstTile()
    }

    override fun onPause() {
        if (foreground === this) foreground = null
        super.onPause()
    }

    override fun onDestroy() {
        app.removeListener(changeListener)
        unregisterReceiver(packageReceiver)
        super.onDestroy()
    }

    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        // Home-Taste auf dem Startbildschirm: zurück zum Anfang.
        activeDialog?.dismiss()
        favList.scrollToPosition(0)
        allList.scrollToPosition(0)
        focusFirstTile()
    }

    @Deprecated("Launcher bleibt bei Zurück einfach stehen")
    override fun onBackPressed() = Unit

    private fun focusFirstTile() {
        favList.post {
            (favList.getChildAt(0) ?: allList.getChildAt(0))?.requestFocus()
        }
    }

    private fun refresh() {
        val favorites = app.apps.favorites()
        favAdapter.items = favorites
        allAdapter.items = app.apps.all()
        favEmpty.visibility = if (favorites.isEmpty()) View.VISIBLE else View.GONE
        favList.visibility = if (favorites.isEmpty()) View.GONE else View.VISIBLE
    }

    private fun updateHeader() {
        greeting.text = when (Calendar.getInstance().get(Calendar.HOUR_OF_DAY)) {
            in 5..10 -> "Guten Morgen"
            in 11..16 -> "Guten Tag"
            in 17..21 -> "Guten Abend"
            else -> "Gute Nacht"
        }
        remotePill.text = "Handy · ${Net.ip() ?: "offline"}"
    }

    private fun applyWallpaper() {
        val version = app.prefs.wallpaperVersion
        if (version == appliedWallpaper) return
        appliedWallpaper = version
        val metrics = resources.displayMetrics
        thread {
            val bitmap = Wallpapers.load(this, app.prefs, metrics.widthPixels, metrics.heightPixels)
            runOnUiThread {
                wallpaper.alpha = 0f
                wallpaper.setImageBitmap(bitmap)
                wallpaper.animate().alpha(1f).setDuration(400).start()
            }
        }
    }

    private fun launch(entry: AppEntry) {
        if (!app.apps.launch(this, entry.pkg)) toast("${entry.label} lässt sich nicht starten")
    }

    private fun favoriteMenu(entry: AppEntry) {
        show(GlassDialog.menu(this, entry.label, listOf(
            "Öffnen" to { launch(entry) },
            "Nach links verschieben" to { app.apps.moveFavorite(entry.pkg, -1); refresh() },
            "Nach rechts verschieben" to { app.apps.moveFavorite(entry.pkg, 1); refresh() },
            "Aus Favoriten entfernen" to { app.apps.setFavorite(entry.pkg, false); refresh() },
            "App-Info" to { openAppInfo(entry.pkg) },
        )))
    }

    private fun appMenu(entry: AppEntry) {
        val fav = app.apps.isFavorite(entry.pkg)
        show(GlassDialog.menu(this, entry.label, listOf(
            "Öffnen" to { launch(entry) },
            (if (fav) "Aus Favoriten entfernen" else "Zu Favoriten hinzufügen") to {
                app.apps.setFavorite(entry.pkg, !fav)
                refresh()
            },
            "App-Info" to { openAppInfo(entry.pkg) },
        )))
    }

    private fun showInputs() {
        val inputs = TvInputs.list(this)
        val items = inputs.map { input ->
            input.label to { if (!TvInputs.open(this, input.id)) toast("Eingang nicht verfügbar") }
        }.ifEmpty {
            listOf("Keine Eingänge gefunden – Einstellungen öffnen" to { openSettings(Settings.ACTION_SETTINGS) })
        }
        show(GlassDialog.menu(this, "Eingänge", items))
    }

    private fun showWallpapers() {
        val items = Wallpapers.names.mapIndexed { index, name ->
            name to { app.prefs.wallpaper = index; applyWallpaper() }
        } + listOf<Pair<String, () -> Unit>>(
            "Eigenes Foto (vom Handy senden)" to {
                if (Wallpapers.customFile(this).exists()) {
                    app.prefs.wallpaper = -1
                    applyWallpaper()
                } else {
                    showRemoteInfo()
                }
            }
        )
        show(GlassDialog.menu(this, "Hintergrund", items))
    }

    private fun showSettings() {
        val home = if (app.prefs.homeOverride) "An" else "Aus"
        show(GlassDialog.menu(this, "Einstellungen", listOf(
            "Android-Einstellungen" to { openSettings(Settings.ACTION_SETTINGS) },
            "Bedienungshilfe für Fernsteuerung" to { openSettings(Settings.ACTION_ACCESSIBILITY_SETTINGS) },
            "Home-Taste öffnet Glass Home: $home" to {
                app.prefs.homeOverride = !app.prefs.homeOverride
                showSettings()
            },
            "Standard-Startbildschirm wählen" to { openSettings(Settings.ACTION_HOME_SETTINGS) },
            "App-Liste neu laden" to { app.apps.invalidate(); refresh() },
        )))
    }

    private fun showRemoteInfo() {
        val view = LayoutInflater.from(this).inflate(R.layout.dialog_remote, null)
        val dialog = GlassDialog.create(this, view)
        val base = Net.remoteUrl()
        val pin = app.prefs.pin

        fun render(pin: String) {
            view.findViewById<TextView>(R.id.url).text = base ?: "Kein Netzwerk"
            view.findViewById<TextView>(R.id.pin).text = "PIN  $pin"
            if (base != null) {
                view.findViewById<ImageView>(R.id.qr).setImageBitmap(Qr.bitmap("$base/#pin=$pin", 400))
            }
        }
        render(pin)
        view.findViewById<TextView>(R.id.acc_status).text =
            if (RemoteAccessibilityService.instance != null) {
                "✓ Bedienungshilfe aktiv – Steuerung funktioniert in allen Apps."
            } else {
                "Bedienungshilfe aus: Apps starten, Lautstärke und Play/Pause gehen schon. " +
                    "Für Pfeiltasten & Zurück in anderen Apps bitte aktivieren."
            }
        view.findViewById<View>(R.id.btn_close).setOnClickListener { dialog.dismiss() }
        view.findViewById<View>(R.id.btn_acc).setOnClickListener {
            dialog.dismiss()
            openSettings(Settings.ACTION_ACCESSIBILITY_SETTINGS)
        }
        view.findViewById<View>(R.id.btn_pin).setOnClickListener {
            render(app.prefs.newPin())
            toast("Neue PIN – alle Handys müssen sich neu verbinden")
        }
        show(dialog)
        view.findViewById<View>(R.id.btn_close).requestFocus()
    }

    private fun show(dialog: Dialog) {
        activeDialog = dialog
        dialog.setOnDismissListener { if (activeDialog === dialog) activeDialog = null }
        dialog.show()
    }

    private fun openAppInfo(pkg: String) {
        openIntent(Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS, Uri.fromParts("package", pkg, null)))
    }

    private fun openSettings(action: String) {
        if (!openIntent(Intent(action))) openIntent(Intent(Settings.ACTION_SETTINGS))
    }

    private fun openIntent(intent: Intent): Boolean = try {
        startActivity(intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK))
        true
    } catch (e: Exception) {
        toast("Auf diesem Fernseher nicht verfügbar")
        false
    }

    private fun toast(text: String) = Toast.makeText(this, text, Toast.LENGTH_SHORT).show()

    /** Pfeiltasten/OK vom Handy, während der Startbildschirm im Vordergrund ist. Läuft auf dem Main-Thread. */
    fun remoteNav(command: String) {
        val dialog = activeDialog?.takeIf { it.isShowing }
        val focus = dialog?.currentFocus ?: currentFocus
        when (command) {
            "back" -> dialog?.dismiss()
            "ok" -> focus?.performClick()
            "menu" -> focus?.performLongClick()
            else -> {
                if (focus == null) {
                    focusFirstTile()
                    return
                }
                val direction = when (command) {
                    "up" -> View.FOCUS_UP
                    "down" -> View.FOCUS_DOWN
                    "left" -> View.FOCUS_LEFT
                    else -> View.FOCUS_RIGHT
                }
                focus.focusSearch(direction)?.requestFocus(direction)
            }
        }
    }

    companion object {
        @Volatile
        var foreground: MainActivity? = null
            private set
    }
}
