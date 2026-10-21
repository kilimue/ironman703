package de.kili.glasshome

import android.app.Application
import android.os.Handler
import android.os.Looper
import java.util.concurrent.CopyOnWriteArraySet

class App : Application() {
    lateinit var prefs: Prefs
        private set
    lateinit var apps: AppRepository
        private set

    private val listeners = CopyOnWriteArraySet<() -> Unit>()
    private val main = Handler(Looper.getMainLooper())

    override fun onCreate() {
        super.onCreate()
        instance = this
        prefs = Prefs(this)
        apps = AppRepository(this, prefs)
        RemoteServer(this).start()
    }

    fun addListener(listener: () -> Unit) = listeners.add(listener)
    fun removeListener(listener: () -> Unit) = listeners.remove(listener)

    /** Informiert den Startbildschirm, dass sich Favoriten oder Hintergrund geändert haben. */
    fun notifyChanged() {
        main.post { listeners.forEach { it() } }
    }

    companion object {
        lateinit var instance: App
            private set
    }
}
