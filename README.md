# PIDEONWASH | Digital Production Studio

## Was es tut

PIDEONWASH ist ein digitales Produktionsstudio, das sich auf die Entwicklung und Präsentation der Originalserie **EXIRE** konzentriert. Diese Website dient als zentrales Portal und Archiv für die Serie, bietet Einblicke in die Charaktere, Staffeln und die Produktion hinter den Kulissen. Sie fungiert als interaktive Plattform, um die Welt von EXIRE zu erkunden und die kreative Arbeit des PIDEONWASH-Teams zu präsentieren.

## Funktionen

*   **Interaktives Homepage-Layout**: Eine dynamische Startseite mit einem "Bento-Grid"-Layout, das schnellen Zugriff auf Hauptbereiche wie das EXIRE-Projekt und das Team bietet.
*   **Responsive Navigation**: Eine anpassungsfähige Navigationsleiste mit einem Burger-Menü für mobile Geräte, die eine nahtlose Benutzererfahrung auf verschiedenen Bildschirmgrößen gewährleistet.
*   **EXIRE-Projektportal**: Ein dedizierter Bereich für die Serie EXIRE, der detaillierte Informationen zu:
    *   **Charakteren**: Profile der Hauptfiguren mit Hintergrundinformationen.
    *   **Staffeln**: Eine chronologische Übersicht der Episoden mit kurzen Zusammenfassungen.
    *   **Backstage**: Ein Blick hinter die Kulissen der Produktion (im Aufbau).
*   **Team-Präsentation**: Eine Seite, die die Mitglieder des PIDEONWASH-Teams vorstellt, einschließlich ihrer Rollen und sozialen Medien.
*   **Einheitliches Designsystem**: Ein konsistentes visuelles Erscheinungsbild durch die Verwendung von CSS-Variablen, benutzerdefinierten Schriftarten und Farbverläufen.

## Tech Stack

Das PIDEONWASH-Projekt ist eine statische Website, die mit den folgenden Kerntechnologien entwickelt wurde:

*   **HTML5**: Für die Struktur und den Inhalt der Webseiten.

*   **CSS3**: Für das Styling, Layout und die responsive Gestaltung, einschließlich Animationen und interaktiver Elemente.

*   **JavaScript**: Minimaler Einsatz für grundlegende Interaktionen wie das Umschalten des Navigationsmenüs.

## Installation

Um das PIDEONWASH-Projekt lokal einzurichten, folgen Sie diesen Schritten:

1.  **Repository klonen**:

    ```bash
    git clone https://github.com/PIDEONWASH/PIDEONWASH.git
    ```

2.  **In das Projektverzeichnis wechseln**:

    ```bash
    cd PIDEONWASH
    ```

3.  **Website öffnen**: Öffnen Sie die Datei `index.html` in Ihrem bevorzugten Webbrowser.

    ```bash
    start index.html # Für Windows
    open index.html  # Für macOS
    xdg-open index.html # Für Linux
    ```

## Nutzung

Navigieren Sie durch die Website, um mehr über das PIDEONWASH-Studio und die EXIRE-Serie zu erfahren. Erkunden Sie die verschiedenen Abschnitte wie die Teamseite, das EXIRE-Portal mit Charakteren und Staffeln sowie die Backstage-Einblicke.

## Projektstruktur

```
PIDEONWASH/
├── assets/                     # Bilder, Logos und andere Medienressourcen
├── web/                        # Hauptverzeichnis für Webseiten-Assets
│   ├── 01_script/              # JavaScript-Dateien
│   │   └── nav.js              # Skript für die Navigation
│   ├── 02_css/                 # Globale CSS-Dateien
│   │   └── style.css           # Haupt-Stylesheet
│   ├── exire/                  # Spezifische Dateien für das EXIRE-Projekt
│   │   ├── css/                # CSS-Dateien für EXIRE-Seiten
│   │   │   ├── backstage.css
│   │   │   ├── characters.css
│   │   │   └── seasons.css
│   │   ├── pages/              # HTML-Seiten für EXIRE
│   │   │   ├── backstage.html
│   │   │   ├── characters.html
│   │   │   └── seasons.html
│   │   └── index.html          # EXIRE-Übersichtsseite
│   └── main/                   # Hauptseiten (z.B. Team)
│       ├── team.css            # CSS für die Teamseite
│       └── team.html           # HTML für die Teamseite
├── .github/                    # GitHub-spezifische Konfigurationen
│   └── workflows/              # GitHub Actions Workflows
│       └── static.yml          # Workflow für GitHub Pages Deployment
├── .gitignore                  # Von Git zu ignorierende Dateien
├── details.pdf                 # Zusätzliche Projektdetails (optional)
├── index.html                  # Startseite der Website
└── README.md                   # Diese README-Datei
```

## Mitwirken

Wir freuen uns über Beiträge zur Verbesserung des PIDEONWASH-Projekts. Wenn Sie einen Fehler finden oder eine Funktion vorschlagen möchten, erstellen Sie bitte ein Issue oder reichen Sie einen Pull Request ein. Stellen Sie sicher, dass Ihr Code den bestehenden Stilrichtlinien entspricht und gut dokumentiert ist.

1.  **Forken Sie das Repository**.
2.  **Erstellen Sie einen neuen Branch** (`git checkout -b feature/IhreFunktion` oder `bugfix/IhrFehler`).
3.  **Nehmen Sie Ihre Änderungen vor und committen Sie diese** (`git commit -m "Füge neue Funktion hinzu"`).
4.  **Pushen Sie Ihren Branch** (`git push origin feature/IhreFunktion`).
5.  **Öffnen Sie einen Pull Request**.

---

**Manus AI**
