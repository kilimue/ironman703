package de.kili.glasshome

import android.app.Activity
import android.app.Dialog
import android.view.Gravity
import android.view.View
import android.widget.LinearLayout
import android.widget.ScrollView
import android.widget.TextView

object GlassDialog {
    fun create(activity: Activity, content: View): Dialog =
        Dialog(activity, R.style.GlassDialog).apply { setContentView(content) }

    fun menu(activity: Activity, title: String, items: List<Pair<String, () -> Unit>>): Dialog {
        val density = activity.resources.displayMetrics.density
        fun dp(v: Int) = (v * density).toInt()

        val list = LinearLayout(activity).apply { orientation = LinearLayout.VERTICAL }
        val panel = LinearLayout(activity).apply {
            orientation = LinearLayout.VERTICAL
            setBackgroundResource(R.drawable.glass_panel)
            setPadding(dp(24), dp(22), dp(24), dp(16))
            minimumWidth = dp(360)
        }
        panel.addView(TextView(activity).apply {
            text = title
            textSize = 20f
            setTextColor(0xFFFFFFFF.toInt())
            setPadding(dp(4), 0, dp(4), dp(14))
        })
        panel.addView(ScrollView(activity).apply {
            isVerticalScrollBarEnabled = false
            addView(list)
        }, LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT))

        val dialog = create(activity, panel)
        items.forEachIndexed { index, (label, action) ->
            val button = TextView(activity, null, 0, R.style.GlassButton).apply {
                text = label
                gravity = Gravity.CENTER_VERTICAL
                setPadding(dp(18), 0, dp(18), 0)
                setOnClickListener {
                    dialog.dismiss()
                    action()
                }
            }
            list.addView(button, LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, dp(46)).apply {
                bottomMargin = dp(8)
            })
            if (index == 0) button.post { button.requestFocus() }
        }
        return dialog
    }
}
