package de.kili.glasshome

import android.content.Context
import android.content.Intent
import android.media.tv.TvContract
import android.media.tv.TvInputManager

/** HDMI- und andere Durchreich-Eingänge des Fernsehers. */
object TvInputs {
    data class Input(val id: String, val label: String)

    fun list(context: Context): List<Input> = try {
        val manager = context.getSystemService(Context.TV_INPUT_SERVICE) as? TvInputManager
        manager?.tvInputList.orEmpty()
            .filter { it.isPassthroughInput }
            .map { Input(it.id, it.loadLabel(context).toString()) }
    } catch (e: Exception) {
        emptyList()
    }

    fun open(context: Context, id: String): Boolean = try {
        val intent = Intent(Intent.ACTION_VIEW, TvContract.buildChannelUriForPassthroughInput(id))
            .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        context.startActivity(intent)
        true
    } catch (e: Exception) {
        false
    }
}
