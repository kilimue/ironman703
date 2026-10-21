package de.kili.glasshome

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent

/** Startet nach dem Einschalten den Prozess und damit den Fernbedienungs-Server (siehe App.onCreate). */
class BootReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) = Unit
}
