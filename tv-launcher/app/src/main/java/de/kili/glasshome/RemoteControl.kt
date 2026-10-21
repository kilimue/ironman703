package de.kili.glasshome

import android.content.Context
import android.content.Intent
import android.media.AudioManager
import android.os.Handler
import android.os.Looper
import android.provider.Settings
import android.view.KeyEvent

/** Setzt Befehle der Handy-Fernbedienung um. */
object RemoteControl {
    private val main = Handler(Looper.getMainLooper())

    /** Context zum Starten von Apps: der Accessibility-Dienst darf das auch aus dem Hintergrund. */
    fun launchContext(app: Context): Context = RemoteAccessibilityService.instance ?: app

    fun key(context: Context, key: String): Boolean {
        val audio = context.getSystemService(Context.AUDIO_SERVICE) as AudioManager
        val accessibility = RemoteAccessibilityService.instance
        val launcher = MainActivity.foreground
        return when (key) {
            "volup" -> volume(audio, AudioManager.ADJUST_RAISE)
            "voldown" -> volume(audio, AudioManager.ADJUST_LOWER)
            "mute" -> volume(audio, AudioManager.ADJUST_TOGGLE_MUTE)
            "playpause" -> media(audio, KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE)
            "next" -> media(audio, KeyEvent.KEYCODE_MEDIA_NEXT)
            "prev" -> media(audio, KeyEvent.KEYCODE_MEDIA_PREVIOUS)
            "ff" -> media(audio, KeyEvent.KEYCODE_MEDIA_FAST_FORWARD)
            "rew" -> media(audio, KeyEvent.KEYCODE_MEDIA_REWIND)
            "home" -> home(context)
            "settings" -> start(launchContext(context), Intent(Settings.ACTION_SETTINGS))
            "back" -> when {
                launcher != null -> main.post { launcher.remoteNav("back") }
                else -> accessibility?.back() ?: false
            }
            "up", "down", "left", "right", "ok", "menu" -> when {
                launcher != null -> main.post { launcher.remoteNav(key) }
                key == "menu" -> false
                else -> accessibility?.dpad(key) ?: false
            }
            else -> false
        }
    }

    fun text(value: String): Boolean = RemoteAccessibilityService.instance?.typeText(value) ?: false

    private fun home(context: Context): Boolean {
        val accessibility = RemoteAccessibilityService.instance
        if (accessibility != null) {
            accessibility.goHome()
            return true
        }
        return start(context, Intent(context, MainActivity::class.java).addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP))
    }

    private fun start(context: Context, intent: Intent): Boolean = try {
        context.startActivity(intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK))
        true
    } catch (e: Exception) {
        false
    }

    private fun volume(audio: AudioManager, direction: Int): Boolean {
        audio.adjustStreamVolume(AudioManager.STREAM_MUSIC, direction, AudioManager.FLAG_SHOW_UI)
        return true
    }

    private fun media(audio: AudioManager, code: Int): Boolean {
        audio.dispatchMediaKeyEvent(KeyEvent(KeyEvent.ACTION_DOWN, code))
        audio.dispatchMediaKeyEvent(KeyEvent(KeyEvent.ACTION_UP, code))
        return true
    }
}
