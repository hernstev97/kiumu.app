# Roadmap — Habit Tracker

> Die großen Phasen in Reihenfolge. Bewusst grob — Details und Tagesstand stehen in
> [STATUS.md](STATUS.md), Begründungen in [DECISIONS.md](DECISIONS.md).

| | |
|---|---|
| **Letzte Aktualisierung** | 2026-06-22 |
| **Aktuelle Phase** | Phase 0 (Setup) → als Nächstes Phase 1 |

---

## Phase 0 — Fundament *(läuft gerade)*

Projekt ernsthaft aufsetzen, bevor Code entsteht.

- [x] Idee geschärft, Kernkonzept (Geldbörse) festgelegt.
- [x] Stack entschieden.
- [x] Dokumentations-Fundament angelegt (dieses Repo).
- [ ] Datenmodell für Phase 1 entwerfen. ← **nächster inhaltlicher Schritt**
- [ ] Projekt scaffolden (Next.js + TypeScript), Git/GitHub einrichten.
- [ ] Supabase-Projekt anlegen, Tabellen + RLS für das Datenmodell.

## Phase 1 — Kernschleife: echt, aber minimal

Das Ziel: eine lauffähige App, die der Entwickler **täglich selbst nutzen** kann —
und an der die eingerosteten Frontend-Muskeln zurückkommen und Supabase/DB/Auth
gelernt werden.

Umfang (siehe [PRD.md](PRD.md) → „In Scope V1"):

- Login & Registrierung (Supabase Auth).
- Gewohnheiten anlegen; täglich abhaken.
- Punkte automatisch in die Geldbörse gutschreiben.
- Ziele mit Preis anlegen; Punkte Schritt für Schritt investieren.
- Übersicht über Gewohnheiten und Ziel-Fortschritt.

Nicht in Phase 1: Earmarking, Ansparen-Variante, Graphen, Streaks-Feature,
Erinnerungen, Abzeichen, Bezahlmodell.

**Definition of Done der Phase:** Der Entwickler nutzt die deployte App im Alltag,
versteht jede Schicht (inkl. Auth & Datenmodell) und kann sie erklären.

## Phase 2 — „Saft" & Bindung

Aus „funktioniert" wird „fühlt sich gut an".

- Befriedigende Animationen beim Abhaken und Investieren (der Dopamin-Punkt).
- Streaks sichtbar machen; Erfolgsquoten.
- Historische Ansicht (Kalender/Diagramm), erste Graphen.
- Gewohnheiten pausieren/archivieren.
- Ansparen-vs-Schritt-für-Schritt als Einstellung; ggf. pro Ziel.
- Eventuell Earmarking.

## Phase 3 — Mobile

- React-Native-App (Expo) auf demselben Supabase-Backend.
- Push-Erinnerungen (leben hier natürlich).

## Phase 4 — „Ernsthaftes Produkt"

Erst wenn eine Kernschleife existiert, die der Entwickler liebt.

- Bezahlmodell / Premium-Funktionen (erklärtes Fernziel).
- Abzeichen/Meilensteine, soziale Funktionen.

---

## Zeitschätzungen

Bewusst noch **keine** harten Zahlen — ohne aufgeschlüsselte Aufgaben wären sie
geraten. Sobald Phase 1 in konkrete Tasks zerlegt ist, wird hier (oder in
STATUS.md) sauber geschätzt. Grobe Bleistift-Notiz: Phase 1 in der Größenordnung
einiger Wochen Feierabend-Sessions — **ausdrücklich vorläufig**.
