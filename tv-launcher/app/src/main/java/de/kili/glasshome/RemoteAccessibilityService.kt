package de.kili.glasshome

import android.accessibilityservice.AccessibilityService
import android.content.Intent
import android.os.Build
import android.os.Bundle
import android.view.KeyEvent
import android.view.View
import android.view.accessibility.AccessibilityEvent
import android.view.accessibility.AccessibilityNodeInfo

/**
 * Optionale Bedienungshilfe: erlaubt der Handy-Fernbedienung Pfeiltasten, OK, Zurück und Texteingabe
 * in anderen Apps und leitet die Home-Taste der echten Fernbedienung auf Glass Home um.
 */
class RemoteAccessibilityService : AccessibilityService() {

    override fun onServiceConnected() {
        instance = this
    }

    override fun onUnbind(intent: Intent?): Boolean {
        instance = null
        return super.onUnbind(intent)
    }

    override fun onDestroy() {
        instance = null
        super.onDestroy()
    }

    override fun onAccessibilityEvent(event: AccessibilityEvent?) = Unit

    override fun onInterrupt() = Unit

    override fun onKeyEvent(event: KeyEvent): Boolean {
        if (event.keyCode == KeyEvent.KEYCODE_HOME && App.instance.prefs.homeOverride) {
            if (event.action == KeyEvent.ACTION_UP) goHome()
            return true
        }
        return false
    }

    fun goHome() {
        val intent = Intent(this, MainActivity::class.java)
            .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP or Intent.FLAG_ACTIVITY_RESET_TASK_IF_NEEDED)
        startActivity(intent)
    }

    fun back(): Boolean = performGlobalAction(GLOBAL_ACTION_BACK)

    fun dpad(command: String): Boolean {
        if (Build.VERSION.SDK_INT >= 33) {
            val action = when (command) {
                "up" -> GLOBAL_ACTION_DPAD_UP
                "down" -> GLOBAL_ACTION_DPAD_DOWN
                "left" -> GLOBAL_ACTION_DPAD_LEFT
                "right" -> GLOBAL_ACTION_DPAD_RIGHT
                else -> GLOBAL_ACTION_DPAD_CENTER
            }
            return performGlobalAction(action)
        }
        // Ältere Android-Versionen: Fokus über den Accessibility-Baum bewegen.
        val root = rootInActiveWindow ?: return false
        val focused = root.findFocus(AccessibilityNodeInfo.FOCUS_INPUT)
        if (command == "ok") {
            var node = focused
            while (node != null && !node.isClickable) node = node.parent
            return node?.performAction(AccessibilityNodeInfo.ACTION_CLICK) ?: false
        }
        if (focused == null) {
            return firstMatching(root) { it.isFocusable && it.isVisibleToUser }
                ?.performAction(AccessibilityNodeInfo.ACTION_FOCUS) ?: false
        }
        val direction = when (command) {
            "up" -> View.FOCUS_UP
            "down" -> View.FOCUS_DOWN
            "left" -> View.FOCUS_LEFT
            else -> View.FOCUS_RIGHT
        }
        return focused.focusSearch(direction)?.performAction(AccessibilityNodeInfo.ACTION_FOCUS) ?: false
    }

    fun typeText(text: String): Boolean {
        val root = rootInActiveWindow ?: return false
        val target = root.findFocus(AccessibilityNodeInfo.FOCUS_INPUT)?.takeIf { it.isEditable }
            ?: firstMatching(root) { it.isEditable && it.isVisibleToUser }
            ?: return false
        val args = Bundle().apply {
            putCharSequence(AccessibilityNodeInfo.ACTION_ARGUMENT_SET_TEXT_CHARSEQUENCE, text)
        }
        return target.performAction(AccessibilityNodeInfo.ACTION_SET_TEXT, args)
    }

    private fun firstMatching(node: AccessibilityNodeInfo, predicate: (AccessibilityNodeInfo) -> Boolean): AccessibilityNodeInfo? {
        if (predicate(node)) return node
        for (i in 0 until node.childCount) {
            val child = node.getChild(i) ?: continue
            firstMatching(child, predicate)?.let { return it }
        }
        return null
    }

    companion object {
        @Volatile
        var instance: RemoteAccessibilityService? = null
            private set
    }
}
