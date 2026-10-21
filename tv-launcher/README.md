# Glass Home – werbefreier Glas-Launcher für Xiaomi / Android TV

Ein schlichter Startbildschirm im Glas-Look für Android TV / Google TV (z. B. Xiaomi TV A, A Pro, Q-Serie, Mi TV Stick):

- **Glas-Design**: Uhr, Begrüßung, durchscheinende Kacheln über einem Farbverlauf oder deinem eigenen Foto
- **Keine Werbung, keine Empfehlungen**: nur deine Apps, Favoriten zuerst
- **Handy als Fernbedienung**: im Browser (iPhone & Android), ohne App aus dem Store; Steuerkreuz, Zurück, Home, Lautstärke, Play/Pause, Apps starten, HDMI-Eingänge, Text eingeben, Hintergrundfoto schicken

## 1. Installieren

1. Am TV aus dem Play Store die App **Downloader** (von AFTVnews) installieren.
2. In Downloader diese Adresse eingeben:
   `https://github.com/kilimue/ironman703/releases/download/glasshome/GlassHome.apk`
3. Wenn gefragt: *Installation aus unbekannten Quellen* für Downloader erlauben → **Installieren**.

> Die APK baut GitHub Actions automatisch bei jeder Änderung im Ordner `tv-launcher/`.

## 2. Als Startbildschirm verwenden (Werbung loswerden)

**Variante A – ohne PC (empfohlen zum Ausprobieren)**
Bedienungshilfe einschalten (siehe 3). Dann öffnet die **Home-Taste** der Fernbedienung immer Glass Home.
Abschaltbar im Launcher unter *Einstellungen → Home-Taste öffnet Glass Home*.

**Variante B – Original-Startbildschirm deaktivieren (per ADB vom PC)**
Am TV: *Einstellungen → Geräteeinstellungen → Info → Build* 7× drücken → *Entwickleroptionen → USB-/Netzwerk-Debugging* an. Dann am PC:

```sh
adb connect <IP-des-TV>
# Google TV (die meisten neuen Xiaomi-Fernseher):
adb shell pm disable-user --user 0 com.google.android.apps.tv.launcherx
adb shell pm disable-user --user 0 com.google.android.tungsten.setupwraith
# Älteres Android TV:
adb shell pm disable-user --user 0 com.google.android.tvlauncher
# Xiaomi PatchWall (falls vorhanden):
adb shell pm disable-user --user 0 com.mitv.tvhome.atv
```

Rückgängig machen: dieselben Befehle mit `pm enable` statt `pm disable-user --user 0`.

## 3. Handy als Fernbedienung

1. Handy ins selbe WLAN wie der Fernseher.
2. Am TV im Startbildschirm oben auf **„Handy · 192.168…“** gehen → QR-Code mit der iPhone-Kamera scannen.
3. Die Seite verbindet sich automatisch per PIN. Tipp: in Safari *Teilen → Zum Home-Bildschirm* – dann wirkt es wie eine App.

**Bedienungshilfe** (für Pfeiltasten/Zurück/Text *in anderen Apps* und die Home-Tasten-Umleitung):
Am TV *Einstellungen → Bedienungshilfen → Glass Home Fernbedienung → An*.
Ist der Schalter gesperrt („Eingeschränkte Einstellung“), einmalig per ADB:

```sh
adb shell appops set de.kili.glasshome ACCESS_RESTRICTED_SETTINGS allow
# oder direkt einschalten:
adb shell settings put secure enabled_accessibility_services de.kili.glasshome/.RemoteAccessibilityService
adb shell settings put secure accessibility_enabled 1
```

## Bedienung am TV

- **OK** startet eine App, **lange OK** (oder Menü-Taste) öffnet Optionen: Favorit hinzufügen/entfernen, verschieben, App-Info
- Oben rechts: Eingänge (HDMI), Handy-Verbindung, Hintergrund, Einstellungen

## Selbst bauen

```sh
cd tv-launcher
./gradlew assembleRelease   # braucht Android SDK (ANDROID_HOME)
```
