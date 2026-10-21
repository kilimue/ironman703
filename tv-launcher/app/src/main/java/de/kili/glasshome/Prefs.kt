package de.kili.glasshome

import android.content.Context
import java.security.SecureRandom

class Prefs(context: Context) {
    private val sp = context.getSharedPreferences("glass_home", Context.MODE_PRIVATE)
    private val random = SecureRandom()

    val pin: String
        @Synchronized get() {
            sp.getString("pin", null)?.let { return it }
            return newPin()
        }

    @Synchronized
    fun newPin(): String {
        val pin = "%04d".format(random.nextInt(10000))
        sp.edit().putString("pin", pin).putStringSet("tokens", emptySet()).apply()
        return pin
    }

    val tokens: Set<String>
        get() = sp.getStringSet("tokens", emptySet()) ?: emptySet()

    @Synchronized
    fun addToken(token: String) {
        sp.edit().putStringSet("tokens", tokens + token).apply()
    }

    /** null = noch nie gesetzt, dann werden Standard-Favoriten vorgeschlagen. */
    var favorites: List<String>?
        get() = sp.getString("favorites", null)?.split(',')?.filter { it.isNotBlank() }
        set(value) = sp.edit().putString("favorites", value.orEmpty().joinToString(",")).apply()

    /** Index der Farbvorlage, -1 = eigenes Foto. */
    var wallpaper: Int
        get() = sp.getInt("wallpaper", 0)
        set(value) = sp.edit().putInt("wallpaper", value).putLong("wallpaper_version", wallpaperVersion + 1).apply()

    val wallpaperVersion: Long
        get() = sp.getLong("wallpaper_version", 0)

    var homeOverride: Boolean
        get() = sp.getBoolean("home_override", true)
        set(value) = sp.edit().putBoolean("home_override", value).apply()

    val deviceName: String
        get() = sp.getString("device_name", null) ?: "Wohnzimmer-TV"
}
