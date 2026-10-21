package de.kili.glasshome

import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.graphics.Canvas
import android.graphics.Paint
import android.graphics.RadialGradient
import android.graphics.Shader
import java.io.File
import kotlin.math.max

object Wallpapers {
    private class Blob(val x: Float, val y: Float, val r: Float, val color: Long)
    private class Preset(val name: String, val base: Long, val blobs: List<Blob>)

    private val presets = listOf(
        Preset(
            "Aurora", 0xFF070B1E, listOf(
                Blob(0.15f, 0.15f, 0.65f, 0xB32E5BFF),
                Blob(0.88f, 0.12f, 0.55f, 0x998A2BE2),
                Blob(0.72f, 0.95f, 0.65f, 0x8814B8A6),
                Blob(0.25f, 0.9f, 0.45f, 0x66FF4D8D),
            )
        ),
        Preset(
            "Sonnenuntergang", 0xFF180A1C, listOf(
                Blob(0.82f, 0.2f, 0.6f, 0xCCFF7A3D),
                Blob(0.18f, 0.3f, 0.6f, 0x99D63384),
                Blob(0.5f, 1.05f, 0.75f, 0x995B21B6),
            )
        ),
        Preset(
            "Ozean", 0xFF031420, listOf(
                Blob(0.2f, 0.1f, 0.7f, 0xB30EA5E9),
                Blob(0.9f, 0.85f, 0.6f, 0x9906B6D4),
                Blob(0.55f, 0.45f, 0.4f, 0x4D3B82F6),
            )
        ),
        Preset(
            "Graphit", 0xFF0D0E12, listOf(
                Blob(0.2f, 0.0f, 0.8f, 0x40FFFFFF),
                Blob(0.9f, 1.0f, 0.7f, 0x30A1A1AA),
            )
        ),
        Preset(
            "Smaragd", 0xFF04140F, listOf(
                Blob(0.1f, 0.2f, 0.65f, 0xA010B981),
                Blob(0.85f, 0.25f, 0.5f, 0x7084CC16),
                Blob(0.6f, 1.0f, 0.65f, 0x800E7490),
            )
        ),
    )

    val names: List<String> get() = presets.map { it.name }

    fun customFile(context: Context) = File(context.filesDir, "wallpaper.jpg")

    fun load(context: Context, prefs: Prefs, width: Int, height: Int): Bitmap {
        if (prefs.wallpaper == -1) {
            decodeCustom(customFile(context), width, height)?.let { return it }
        }
        return render(prefs.wallpaper.coerceIn(0, presets.lastIndex), width / 2, height / 2)
    }

    private fun decodeCustom(file: File, width: Int, height: Int): Bitmap? {
        if (!file.exists()) return null
        val bounds = BitmapFactory.Options().apply { inJustDecodeBounds = true }
        BitmapFactory.decodeFile(file.path, bounds)
        var sample = 1
        while (bounds.outWidth / (sample * 2) >= width && bounds.outHeight / (sample * 2) >= height) sample *= 2
        return BitmapFactory.decodeFile(file.path, BitmapFactory.Options().apply { inSampleSize = sample })
    }

    private fun render(index: Int, w: Int, h: Int): Bitmap {
        val preset = presets[index]
        val bitmap = Bitmap.createBitmap(max(w, 16), max(h, 9), Bitmap.Config.ARGB_8888)
        val canvas = Canvas(bitmap)
        canvas.drawColor(preset.base.toInt())
        val paint = Paint(Paint.ANTI_ALIAS_FLAG or Paint.DITHER_FLAG)
        val size = max(bitmap.width, bitmap.height).toFloat()
        for (blob in preset.blobs) {
            val color = blob.color.toInt()
            paint.shader = RadialGradient(
                blob.x * bitmap.width, blob.y * bitmap.height, blob.r * size,
                intArrayOf(color, color and 0x00FFFFFF), null, Shader.TileMode.CLAMP
            )
            canvas.drawRect(0f, 0f, bitmap.width.toFloat(), bitmap.height.toFloat(), paint)
        }
        return bitmap
    }
}
