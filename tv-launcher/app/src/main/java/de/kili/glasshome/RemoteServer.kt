package de.kili.glasshome

import android.graphics.BitmapFactory
import android.os.Build
import android.util.Log
import org.json.JSONArray
import org.json.JSONObject
import java.io.BufferedInputStream
import java.io.IOException
import java.io.InputStream
import java.io.OutputStream
import java.net.InetSocketAddress
import java.net.ServerSocket
import java.net.Socket
import java.net.URLDecoder
import java.security.SecureRandom
import java.util.concurrent.Executors
import kotlin.concurrent.thread

/**
 * Kleiner HTTP-Server im Heimnetz: liefert die Handy-Fernbedienung (assets/remote.html)
 * und eine JSON-API. Zugriff nur nach Eingabe der PIN, die auf dem Fernseher angezeigt wird.
 */
class RemoteServer(private val app: App) {

    private class Request(
        val method: String,
        val path: String,
        val query: Map<String, String>,
        val headers: Map<String, String>,
        val body: ByteArray,
    )

    private class Response(
        val status: Int,
        val type: String,
        val body: ByteArray,
        val cacheable: Boolean = false,
    )

    private val pool = Executors.newFixedThreadPool(6)
    private val random = SecureRandom()
    private var failedPins = 0
    private var lockedUntil = 0L

    fun start() {
        thread(name = "glass-remote", isDaemon = true) {
            while (true) {
                try {
                    ServerSocket().use { server ->
                        server.reuseAddress = true
                        server.bind(InetSocketAddress(PORT))
                        while (true) {
                            val socket = server.accept()
                            pool.execute { serve(socket) }
                        }
                    }
                } catch (e: Exception) {
                    Log.w(TAG, "Server neu starten", e)
                    Thread.sleep(3000)
                }
            }
        }
    }

    private fun serve(socket: Socket) {
        socket.use {
            try {
                it.soTimeout = 20_000
                val request = parse(BufferedInputStream(it.getInputStream())) ?: return
                val response = try {
                    route(request)
                } catch (e: Exception) {
                    Log.w(TAG, "Fehler bei ${request.path}", e)
                    json(500, JSONObject().put("error", e.message ?: "Fehler"))
                }
                write(it.getOutputStream(), response)
            } catch (e: Exception) {
                Log.d(TAG, "Verbindung abgebrochen", e)
            }
        }
    }

    private fun route(r: Request): Response {
        if (r.method == "GET" && (r.path == "/" || r.path == "/index.html")) {
            return Response(200, "text/html; charset=utf-8", app.assets.open("remote.html").use { it.readBytes() })
        }
        if (r.path == "/api/pair" && r.method == "POST") return pair(r)
        if (!r.path.startsWith("/api/")) return text(404, "Nicht gefunden")

        val token = r.headers["x-token"] ?: r.query["t"]
        if (token.isNullOrEmpty() || token !in app.prefs.tokens) {
            return json(401, JSONObject().put("error", "PIN erforderlich"))
        }
        if (r.path == "/api/icon") {
            val png = app.apps.iconPng(r.query["pkg"].orEmpty()) ?: return text(404, "Kein Icon")
            return Response(200, "image/png", png, cacheable = true)
        }
        if (r.path == "/api/state") return json(200, state())
        if (r.method != "POST") return text(405, "Nur POST")

        val result = when (r.path) {
            "/api/key" -> RemoteControl.key(app, r.query["k"].orEmpty())
            "/api/text" -> RemoteControl.text(String(r.body, Charsets.UTF_8))
            "/api/launch" -> app.apps.launch(RemoteControl.launchContext(app), r.query["pkg"].orEmpty())
            "/api/input" -> TvInputs.open(RemoteControl.launchContext(app), r.query["id"].orEmpty())
            "/api/fav" -> {
                app.apps.setFavorite(r.query["pkg"].orEmpty(), r.query["on"] == "1")
                app.notifyChanged()
                true
            }
            "/api/wallpaper" -> wallpaper(r)
            else -> return text(404, "Nicht gefunden")
        }
        return json(200, JSONObject().put("ok", result))
    }

    @Synchronized
    private fun pair(r: Request): Response {
        val now = System.currentTimeMillis()
        if (now < lockedUntil) return json(429, JSONObject().put("error", "Zu viele Versuche – bitte 1 Minute warten"))
        val pin = try {
            JSONObject(String(r.body, Charsets.UTF_8)).optString("pin")
        } catch (e: Exception) {
            r.query["pin"].orEmpty()
        }
        if (pin != app.prefs.pin) {
            if (++failedPins >= 5) {
                failedPins = 0
                lockedUntil = now + 60_000
            }
            return json(403, JSONObject().put("error", "Falsche PIN"))
        }
        failedPins = 0
        val token = ByteArray(16).also { random.nextBytes(it) }.joinToString("") { "%02x".format(it) }
        app.prefs.addToken(token)
        return json(200, JSONObject().put("token", token))
    }

    private fun state(): JSONObject {
        val apps = JSONArray()
        for (entry in app.apps.all()) {
            apps.put(JSONObject().put("pkg", entry.pkg).put("label", entry.label).put("banner", app.apps.banner(entry.pkg) != null))
        }
        val inputs = JSONArray()
        for (input in TvInputs.list(app)) inputs.put(JSONObject().put("id", input.id).put("label", input.label))
        return JSONObject()
            .put("name", app.prefs.deviceName)
            .put("model", "${Build.MANUFACTURER} ${Build.MODEL}")
            .put("sdk", Build.VERSION.SDK_INT)
            .put("accessibility", RemoteAccessibilityService.instance != null)
            .put("favorites", JSONArray(app.apps.favoritePackages()))
            .put("apps", apps)
            .put("inputs", inputs)
            .put("wallpapers", JSONArray(Wallpapers.names))
            .put("wallpaper", app.prefs.wallpaper)
    }

    private fun wallpaper(r: Request): Boolean {
        val preset = r.query["preset"]?.toIntOrNull()
        if (preset != null) {
            app.prefs.wallpaper = preset.coerceIn(0, Wallpapers.names.lastIndex)
        } else {
            val bounds = BitmapFactory.Options().apply { inJustDecodeBounds = true }
            BitmapFactory.decodeByteArray(r.body, 0, r.body.size, bounds)
            if (bounds.outWidth <= 0 || bounds.outHeight <= 0) return false
            Wallpapers.customFile(app).writeBytes(r.body)
            app.prefs.wallpaper = -1
        }
        app.notifyChanged()
        return true
    }

    private fun parse(input: InputStream): Request? {
        val line = readLine(input) ?: return null
        val parts = line.split(' ')
        if (parts.size < 2) return null
        val headers = HashMap<String, String>()
        while (true) {
            val header = readLine(input) ?: break
            if (header.isEmpty()) break
            val colon = header.indexOf(':')
            if (colon > 0) headers[header.substring(0, colon).trim().lowercase()] = header.substring(colon + 1).trim()
        }
        val length = headers["content-length"]?.toIntOrNull() ?: 0
        if (length < 0 || length > MAX_BODY) throw IOException("Anfrage zu groß")
        val body = ByteArray(length)
        var offset = 0
        while (offset < length) {
            val n = input.read(body, offset, length - offset)
            if (n < 0) throw IOException("Unvollständige Anfrage")
            offset += n
        }
        val target = parts[1]
        val q = target.indexOf('?')
        return Request(
            method = parts[0].uppercase(),
            path = if (q >= 0) target.substring(0, q) else target,
            query = if (q >= 0) parseQuery(target.substring(q + 1)) else emptyMap(),
            headers = headers,
            body = body,
        )
    }

    private fun parseQuery(query: String): Map<String, String> = query.split('&')
        .filter { it.isNotEmpty() }
        .associate {
            val eq = it.indexOf('=')
            if (eq < 0) decode(it) to "" else decode(it.substring(0, eq)) to decode(it.substring(eq + 1))
        }

    private fun decode(value: String) = URLDecoder.decode(value, "UTF-8")

    private fun readLine(input: InputStream): String? {
        val sb = StringBuilder()
        while (true) {
            val b = input.read()
            if (b == -1) return if (sb.isEmpty()) null else sb.toString()
            if (b == '\n'.code) return sb.toString().trimEnd('\r')
            sb.append(b.toChar())
            if (sb.length > 8192) throw IOException("Zeile zu lang")
        }
    }

    private fun write(out: OutputStream, r: Response) {
        val head = buildString {
            append("HTTP/1.1 ${r.status} ${reason(r.status)}\r\n")
            append("Content-Type: ${r.type}\r\n")
            append("Content-Length: ${r.body.size}\r\n")
            append("Cache-Control: ${if (r.cacheable) "max-age=86400" else "no-store"}\r\n")
            append("Connection: close\r\n\r\n")
        }
        out.write(head.toByteArray(Charsets.ISO_8859_1))
        out.write(r.body)
        out.flush()
    }

    private fun reason(status: Int) = when (status) {
        200 -> "OK"
        401 -> "Unauthorized"
        403 -> "Forbidden"
        404 -> "Not Found"
        405 -> "Method Not Allowed"
        429 -> "Too Many Requests"
        else -> "Error"
    }

    private fun json(status: Int, body: JSONObject) =
        Response(status, "application/json; charset=utf-8", body.toString().toByteArray(Charsets.UTF_8))

    private fun text(status: Int, body: String) =
        Response(status, "text/plain; charset=utf-8", body.toByteArray(Charsets.UTF_8))

    companion object {
        const val PORT = 8765
        private const val TAG = "GlassRemote"
        private const val MAX_BODY = 25 * 1024 * 1024
    }
}
