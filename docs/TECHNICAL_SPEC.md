# Technical Specification — Habit Tracker

> *Womit* und *wie* wir bauen. Das *Was/Warum* steht im [PRD.md](PRD.md), die
> Begründungen einzelner Technik-Entscheidungen in [DECISIONS.md](DECISIONS.md).

| | |
|---|---|
| **Status** | Stack entschieden · Datenmodell & API noch offen |
| **Letzte Aktualisierung** | 2026-06-22 |

---

## 1. Tech-Stack (entschieden)

| Schicht | Technologie | Kurzbegründung (Details in DECISIONS.md) |
|---|---|---|
| Sprache | **TypeScript** (durchgängig) | Bereits vertraut; fängt Fehler früh; KI arbeitet gut damit |
| Web-Frontend | **React über Next.js** | Jüngster Bezugspunkt; Brücke zu React Native; deployt auf Vercel |
| Backend / DB / Auth | **Supabase** (PostgreSQL) | Auth gelöst; echtes SQL lernen; dieselbe Lib für Web & Mobile; Industrie-Standard |
| Mobile (später) | **React Native (Expo)** | Gleiches Supabase-Backend; React-Wissen überträgt sich |
| Hosting / Deploy | **Vercel** | Bereits genutzt; native Next.js-Integration |
| Versionierung | **Git + GitHub** | Backup, Historie, Portfolio |

> Konkrete Versionsnummern und Paketlisten werden beim Scaffolding ergänzt.

## 2. Architektur (Überblick)

```
┌─────────────────┐        ┌──────────────────────────────┐
│  Web (Next.js)  │◄──────►│           Supabase           │
│  React + TS     │        │  - PostgreSQL (Datenbank)    │
└─────────────────┘        │  - Auth (Login/Registrierung)│
                           │  - Auto-generierte APIs      │
┌─────────────────┐        │  - Row Level Security (RLS)  │
│ Mobile (später) │◄──────►│                              │
│ React Native    │        └──────────────────────────────┘
└─────────────────┘
```

- Web- und (später) Mobile-Client sprechen **dasselbe** Supabase-Backend an.
- Datenzugriff läuft über die Supabase-Client-Bibliothek.
- **Sicherheit:** Row Level Security (RLS) muss von Anfang an aktiv sein, damit
  jeder Nutzer nur seine eigenen Daten sieht. Mehr dazu in Abschnitt 5.

## 3. Datenmodell — ⏳ NOCH ZU DEFINIEREN (nächster Schritt)

> Dies ist der **nächste inhaltliche Arbeitsschritt** und zugleich der erste
> bewusste „unter die Haube schauen"-Moment. Hier wird aus der Produktidee ein
> Satz konkreter Tabellen.

Voraussichtliche Entitäten (Arbeitsstand, noch nicht final):

- **users** — von Supabase Auth bereitgestellt (Profile ggf. ergänzend).
- **habits** — die Gewohnheiten eines Nutzers.
- **habit_entries** (Tracking-Einträge) — pro Gewohnheit und Tag: erfüllt/nicht.
- **wallet / points** — der Punkte-Kontostand (oder aus Einträgen berechnet?).
- **goals** — Ziele mit Name, Beschreibung, Preis.
- **investments** — investierte Punkte pro Ziel (für „Schritt für Schritt").
- **goal_habits** — Verknüpfung Ziel ↔ Gewohnheit(en) (für späteres Earmarking).

Offene Modellierungsfragen (hier entscheiden wir gemeinsam):

- Ist der Punktestand ein **gespeicherter Wert** oder wird er aus den Einträgen
  **berechnet**? (Klassischer Trade-off: Einfachheit vs. Konsistenz.)
- Wie wird „investiert" abgebildet, sodass nichts doppelt zählt und der
  Geldbörsen-Saldo immer stimmt?
- Welche Beziehungen sind 1:n, welche n:m?
- Welche Felder braucht jede Tabelle minimal für Phase 1?

→ Sobald entschieden: hier als Tabellen mit Spalten, Typen und Beziehungen
dokumentieren und eine entsprechende ADR in [DECISIONS.md](DECISIONS.md) anlegen.

## 4. API / Datenzugriff — ⏳ NOCH ZU DEFINIEREN

Folgt aus dem Datenmodell. Voraussichtlich überwiegend über die Supabase-Client-
Bibliothek; ggf. einzelne Server-Funktionen für Logik, die nicht im Client liegen
soll. Wird ausgefüllt, sobald das Datenmodell steht.

## 5. Authentifizierung & Sicherheit

- **Auth** über Supabase Auth (E-Mail/Passwort als Start; weitere Methoden später
  möglich). Deckt die Anforderung „Login & Registrierung" ab.
- **Row Level Security (RLS)** von Beginn an aktivieren. **Warum kritisch:** Der
  Supabase-Client läuft im Browser; ohne RLS-Regeln könnten Nutzer fremde Daten
  lesen. RLS ist kein optionales Extra, sondern Pflicht.
- **Secrets:** Niemals Schlüssel/`.env`-Dateien committen. Der öffentliche
  „anon key" gehört in den Client *nur* in Kombination mit RLS; der „service
  role"-Schlüssel niemals in Frontend-Code.

## 6. Nicht-funktionale Anforderungen (Arbeitsstand)

- **Responsiv:** Web-App soll auf Desktop und Mobile-Browser gut funktionieren.
- **Verständlichkeit vor Cleverness:** Code so schreiben, dass das zukünftige Ich
  ihn nach Monaten noch versteht (siehe WAYS_OF_WORKING.md).
- **Performance:** Für Phase 1 unkritisch (kleine Datenmengen, ein Nutzer).
- **Barrierefreiheit:** sinnvolle Defaults (Kontraste, Tastaturbedienung) — kein
  Schwerpunkt in Phase 1, aber nicht aktiv verbauen.

## 7. Bekannte technische Lücken des Entwicklers (ehrlich)

Damit KI-Hilfe und Lernfokus richtig gesetzt werden können:

- Backend, Datenbanken und Auth: weitgehend Neuland → hier liegt der Lernfokus.
- React/TypeScript: vorhanden, aber eingerostet (letztes Projekt > 1 Jahr her).
- Serveranbindung: im Beruf nur an Vorgebautes „angeknüpft", nie selbst aufgesetzt.

→ Konsequenz: Bei Backend/DB/Auth bewusst im **Lern-Modus** arbeiten
(siehe [AI_COLLABORATION.md](AI_COLLABORATION.md)).
