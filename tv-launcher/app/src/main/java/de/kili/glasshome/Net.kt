package de.kili.glasshome

import java.net.Inet4Address
import java.net.NetworkInterface

object Net {
    fun ip(): String? = try {
        NetworkInterface.getNetworkInterfaces()?.toList().orEmpty()
            .filter { it.isUp && !it.isLoopback }
            .sortedBy { if (it.name.startsWith("eth")) 0 else if (it.name.startsWith("wlan")) 1 else 2 }
            .flatMap { it.inetAddresses.toList() }
            .filterIsInstance<Inet4Address>()
            .firstOrNull { it.isSiteLocalAddress }
            ?.hostAddress
    } catch (e: Exception) {
        null
    }

    fun remoteUrl(): String? = ip()?.let { "http://$it:${RemoteServer.PORT}" }
}
