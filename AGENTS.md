# AGENTS.md

> Anweisungen für KI-Agenten, die in diesem Repository arbeiten. Dies ist die
> **einzige Quelle der Wahrheit** für Agenten-Anweisungen (vendor-neutraler offener
> Standard, wird von Cursor, Codex, Copilot, Gemini CLI, Windsurf, Aider u. a.
> nativ gelesen). Claude Code liest [CLAUDE.md](CLAUDE.md), die per Import auf diese
> Datei verweist.
>
> Menschliche Doku liegt in [`/docs`](docs/) — diese Datei verweist darauf, statt
> sie zu duplizieren.

## Projektüberblick

kiumu — gamifizierter Habit-Tracker mit Punkte-Ökonomie: Gewohnheiten erfüllen → Punkte in
einer Geldbörse verdienen → Punkte für selbst gesetzte Ziele ausgeben. Lern- und
Produktprojekt eines (wieder einsteigenden, Frontend-orientierten) Solo-Entwicklers.
Vollständige Produktbeschreibung: [docs/PRD.md](docs/PRD.md).

## ⭐ Zusammenarbeit mit dem Entwickler (wichtigste Regel)

Dies ist ausdrücklich ein **Lernprojekt**. Arbeite im **Lern-Modus**, nicht als
Black Box:

- **Erkläre, bevor du baust.** Bei Kernlogik und neuen Konzepten zuerst Ansatz und
  Trade-offs erklären, nicht ungefragt fertigen Code abladen.
- **Lass den Entwickler die Kernlogik selbst schreiben.** Biete Erklärungen und
  Review an; übernimm vollständig nur Boilerplate/Konfiguration.
- **Produziere keinen Code, den der Entwickler nicht erklären kann.** Im Zweifel
  erklären, bis es sitzt.
- Bei Sicherheitskritischem (Auth, Row Level Security, Schlüssel) immer erklären
  *und* zur Gegenprüfung auffordern.

Details und Prompting-Praktiken: [docs/AI_COLLABORATION.md](docs/AI_COLLABORATION.md).
Hintergrund: [docs/DECISIONS.md](docs/DECISIONS.md) → ADR-0007.

## Tech-Stack

- **Sprache:** TypeScript (durchgängig).
- **Web:** React über Next.js (App Router) mit Tailwind CSS. **Deployment:** Vercel.
- **Backend/DB/Auth:** Supabase (PostgreSQL).
- **Mobile (später):** React Native (Expo), gleiches Supabase-Backend.

Begründungen: [docs/DECISIONS.md](docs/DECISIONS.md) → ADR-0006. Architektur &
Datenmodell: [docs/TECHNICAL_SPEC.md](docs/TECHNICAL_SPEC.md).

## Setup & Befehle

Projekt ist mit Next.js, TypeScript, App Router, Tailwind CSS und ESLint
gescaffoldet.

- **Installation:** `npm install`
- **Lokale Entwicklung:** `npm run dev`
- **Production Build prüfen:** `npm run build`
- **Linting:** `npm run lint`
- **Production Server lokal starten:** `npm run start` (nach `npm run build`)

App-Code liegt unter `src/app/`; Routen folgen dem Next.js-App-Router-Modell
(`page.tsx`, `layout.tsx`). Imports können über den Alias `@/*` auf `src/*`
zeigen.

## Code-Konventionen

- **TypeScript strict.** Klare, sprechende Namen vor Cleverness.
- **Verständlichkeit zuerst:** Code so schreiben, dass das zukünftige Ich ihn nach
  Monaten versteht.
- **ESLint ist eingerichtet:** Vor Commits mindestens `npm run lint` ausführen.
- **Styling:** Tailwind CSS ist eingerichtet; globale Styles liegen in
  `src/app/globals.css`.
- Vertikale Scheiben statt Schicht-für-Schicht — siehe
  [docs/WAYS_OF_WORKING.md](docs/WAYS_OF_WORKING.md).

## Git & Commits

- Kleine, fokussierte Commits; Nachrichten locker nach *Conventional Commits*
  (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`).
- Solo auf `main` ist okay; Feature-Branches (`feat/...`) für Größeres.

## Sicherheit & Secrets (nicht verhandelbar)

- **Niemals** Secrets committen (`.env`, Supabase-Schlüssel). `.gitignore` von Anfang an.
- **Row Level Security (RLS)** muss aktiv sein, sobald Tabellen existieren — der
  Supabase-Client läuft im Browser; ohne RLS sind fremde Daten lesbar.
- Der `service role`-Schlüssel gehört **nie** in Frontend-Code. Der öffentliche
  `anon key` nur zusammen mit RLS.

## Grenzen (do-not-touch)

- Keine Secrets, Schlüssel oder `.env`-Inhalte ausgeben, loggen oder committen.
- Produkt-Leitprinzipien nicht verletzen — insbesondere das **Kein-Bestrafungs-
  Prinzip** (siehe [docs/PRD.md](docs/PRD.md), ADR-0005): keine Logik/UI, die Punkte
  abzieht oder Ziel-Fortschritt zurücksetzt.
- Nichts aus der „Nicht in Scope"-Liste des PRD ungefragt einbauen (Scope-Schutz).

## Vor dem Start / nach getaner Arbeit

- **Vorher:** [docs/STATUS.md](docs/STATUS.md) lesen (aktueller Stand, nächste
  Schritte, offene Fragen).
- **Nachher:** STATUS.md aktualisieren (inkl. Session-Log-Eintrag); bei
  nicht-trivialen Entscheidungen einen ADR in [docs/DECISIONS.md](docs/DECISIONS.md)
  ergänzen.

## Detail-Dokumentation (Wegweiser)

- Produkt/Scope: [docs/PRD.md](docs/PRD.md)
- Technik/Architektur/Datenmodell: [docs/TECHNICAL_SPEC.md](docs/TECHNICAL_SPEC.md)
- Begründungen/Entscheidungen: [docs/DECISIONS.md](docs/DECISIONS.md)
- Phasen: [docs/ROADMAP.md](docs/ROADMAP.md) · Aktueller Stand: [docs/STATUS.md](docs/STATUS.md)
- Begriffe: [docs/GLOSSARY.md](docs/GLOSSARY.md)
- Arbeitsweisen: [docs/WAYS_OF_WORKING.md](docs/WAYS_OF_WORKING.md)
- KI-Zusammenarbeit/Prompting: [docs/AI_COLLABORATION.md](docs/AI_COLLABORATION.md)
- Design: [docs/DESIGN.md](docs/DESIGN.md)
