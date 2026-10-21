package de.kili.glasshome

import android.view.KeyEvent
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class TileAdapter(
    private val big: Boolean,
    private val onClick: (AppEntry) -> Unit,
    private val onMenu: (AppEntry) -> Unit,
) : RecyclerView.Adapter<TileAdapter.Holder>() {

    var items: List<AppEntry> = emptyList()
        set(value) {
            if (field == value) return
            field = value
            notifyDataSetChanged()
        }

    class Holder(view: View) : RecyclerView.ViewHolder(view) {
        val card: View = view.findViewById(R.id.card)
        val banner: ImageView = view.findViewById(R.id.banner)
        val iconBox: LinearLayout = view.findViewById(R.id.icon_box)
        val icon: ImageView = view.findViewById(R.id.icon)
        val iconLabel: TextView = view.findViewById(R.id.icon_label)
        val caption: TextView = view.findViewById(R.id.caption)
    }

    override fun getItemCount() = items.size

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): Holder {
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_app, parent, false)
        val holder = Holder(view)
        val density = parent.resources.displayMetrics.density
        holder.card.layoutParams = holder.card.layoutParams.apply {
            width = ((if (big) 192 else 128) * density).toInt()
            height = ((if (big) 108 else 72) * density).toInt()
        }
        holder.caption.layoutParams.width = holder.card.layoutParams.width
        holder.card.clipToOutline = true
        view.setOnFocusChangeListener { _, focused ->
            val scale = if (focused) 1.1f else 1f
            holder.card.animate().scaleX(scale).scaleY(scale).translationZ(if (focused) 12 * density else 0f)
                .setDuration(160).start()
            holder.caption.animate().alpha(if (focused) 1f else 0.6f).setDuration(160).start()
            holder.banner.animate().alpha(if (focused) 1f else 0.85f).setDuration(160).start()
        }
        return holder
    }

    override fun onBindViewHolder(holder: Holder, position: Int) {
        val entry = items[position]
        val repo = App.instance.apps
        val banner = repo.banner(entry.pkg)
        if (banner != null) {
            holder.banner.setImageDrawable(banner)
            holder.banner.visibility = View.VISIBLE
            holder.banner.alpha = if (holder.itemView.isFocused) 1f else 0.85f
            holder.iconBox.visibility = View.GONE
        } else {
            holder.banner.setImageDrawable(null)
            holder.banner.visibility = View.GONE
            holder.iconBox.visibility = View.VISIBLE
            holder.icon.setImageDrawable(repo.icon(entry.pkg))
            holder.iconLabel.text = entry.label
            holder.iconLabel.visibility = if (big) View.VISIBLE else View.GONE
        }
        holder.caption.text = entry.label
        holder.itemView.contentDescription = entry.label
        holder.itemView.setOnClickListener { onClick(entry) }
        holder.itemView.setOnLongClickListener { onMenu(entry); true }
        holder.itemView.setOnKeyListener { _, keyCode, event ->
            if (keyCode == KeyEvent.KEYCODE_MENU && event.action == KeyEvent.ACTION_UP) {
                onMenu(entry)
                true
            } else {
                false
            }
        }
    }
}
