package de.kili.glasshome

import android.content.Context
import android.content.Intent
import android.graphics.Bitmap
import android.graphics.Canvas
import android.graphics.drawable.Drawable
import android.util.LruCache
import java.io.ByteArrayOutputStream

data class AppEntry(val pkg: String, val label: String)

class AppRepository(private val context: Context, private val prefs: Prefs) {
    private val pm = context.packageManager

    @Volatile
    private var cache: List<AppEntry>? = null
    private val pngCache = LruCache<String, ByteArray>(4 * 1024 * 1024)

    fun all(): List<AppEntry> = cache ?: load().also { cache = it }

    fun invalidate() {
        cache = null
        pngCache.evictAll()
    }

    private fun load(): List<AppEntry> {
        val result = LinkedHashMap<String, AppEntry>()
        for (category in listOf(Intent.CATEGORY_LEANBACK_LAUNCHER, Intent.CATEGORY_LAUNCHER)) {
            val intent = Intent(Intent.ACTION_MAIN).addCategory(category)
            for (info in pm.queryIntentActivities(intent, 0)) {
                val pkg = info.activityInfo.packageName
                if (pkg == context.packageName || pkg in result) continue
                result[pkg] = AppEntry(pkg, info.loadLabel(pm).toString())
            }
        }
        return result.values.sortedBy { it.label.lowercase() }
    }

    @Synchronized
    fun favoritePackages(): List<String> {
        prefs.favorites?.let { return it }
        val installed = all().map { it.pkg }.toSet()
        val defaults = DEFAULT_FAVORITES.filter { it in installed }
            .ifEmpty { all().take(6).map { it.pkg } }
        prefs.favorites = defaults
        return defaults
    }

    fun favorites(): List<AppEntry> {
        val byPkg = all().associateBy { it.pkg }
        return favoritePackages().mapNotNull { byPkg[it] }
    }

    fun isFavorite(pkg: String) = pkg in favoritePackages()

    @Synchronized
    fun setFavorite(pkg: String, on: Boolean) {
        val current = favoritePackages().toMutableList()
        current.remove(pkg)
        if (on) current.add(pkg)
        prefs.favorites = current
    }

    @Synchronized
    fun moveFavorite(pkg: String, delta: Int) {
        val current = favoritePackages().toMutableList()
        val from = current.indexOf(pkg)
        if (from < 0) return
        val to = (from + delta).coerceIn(0, current.lastIndex)
        current.removeAt(from)
        current.add(to, pkg)
        prefs.favorites = current
    }

    fun launch(ctx: Context, pkg: String): Boolean {
        val intent = pm.getLeanbackLaunchIntentForPackage(pkg) ?: pm.getLaunchIntentForPackage(pkg) ?: return false
        return try {
            ctx.startActivity(intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK))
            true
        } catch (e: Exception) {
            false
        }
    }

    fun banner(pkg: String): Drawable? = try {
        pm.getLeanbackLaunchIntentForPackage(pkg)?.let { pm.getActivityBanner(it) }
            ?: pm.getApplicationBanner(pkg)
    } catch (e: Exception) {
        null
    }

    fun icon(pkg: String): Drawable? = try {
        pm.getApplicationIcon(pkg)
    } catch (e: Exception) {
        null
    }

    /** PNG für die Handy-Fernbedienung: Banner (16:9) wenn vorhanden, sonst das App-Icon. */
    fun iconPng(pkg: String): ByteArray? {
        pngCache.get(pkg)?.let { return it }
        val banner = banner(pkg)
        val bitmap = when {
            banner != null -> render(banner, 320, 180)
            else -> render(icon(pkg) ?: return null, 192, 192)
        }
        val out = ByteArrayOutputStream()
        bitmap.compress(Bitmap.CompressFormat.PNG, 100, out)
        bitmap.recycle()
        return out.toByteArray().also { pngCache.put(pkg, it) }
    }

    private fun render(drawable: Drawable, w: Int, h: Int): Bitmap {
        val bitmap = Bitmap.createBitmap(w, h, Bitmap.Config.ARGB_8888)
        drawable.setBounds(0, 0, w, h)
        drawable.draw(Canvas(bitmap))
        return bitmap
    }

    companion object {
        private val DEFAULT_FAVORITES = listOf(
            "com.netflix.ninja",
            "com.google.android.youtube.tv",
            "com.amazon.amazonvideo.livingroom",
            "com.disney.disneyplus",
            "com.spotify.tv.android",
            "com.google.android.youtube.tvmusic",
            "com.plexapp.android",
            "com.apple.atve.androidtv.appletv",
            "com.mitv.tvplayer",
            "com.google.android.tv",
        )
    }
}
