# STATUS — wo stehe ich gerade?

> **Die wichtigste Datei nach einer Pause.** Sie beantwortet in 60 Sekunden:
> Was ist der Stand, was war zuletzt dran, was ist als Nächstes geplant, was ist
> offen? Sie wird **am Ende jeder Arbeitssession** aktualisiert.
>
> Halte sie kurz und ehrlich. Lieber zwei knappe Sätze als ein perfekter Absatz.

| | |
|---|---|
| **Letzte Aktualisierung** | 2026-06-30 |
| **Aktuelle Phase** | Phase 0 — Fundament (siehe [ROADMAP.md](ROADMAP.md)) |
| **Aktueller Branch** | – (noch kein Code-Repo initialisiert) |

---

## 🎯 Aktueller Fokus

Die Grundsatzentscheidungen des Datenmodells (Kontobuch-Ansatz, berechneter Saldo) stehen. Der nächste Schritt ist das Finalisieren der **Felder und Spalten pro Tabelle**.

## ⏭️ Nächste konkrete Schritte

1. Felder/Spalten pro Tabelle finalisieren (Entitäten, Datentypen, Beziehungen).
2. Projekt scaffolden (Next.js + TypeScript), Git/GitHub aufsetzen.
3. Supabase-Projekt anlegen; Tabellen + Row Level Security für das Datenmodell.

## ❓ Offene Fragen (entscheiden, bevor sie blockieren)

- Wie wird das tägliche Investieren visualisiert (Balken, Schritte, …)?

## 🚧 Bekannte Probleme / Stolpersteine

- (Noch keine — es gibt noch keinen Code.)

---

## 📓 Session-Log (neueste zuerst)

> Pro Session ein kurzer Eintrag: erledigt / als Nächstes / offen. Das ist die
> Brotkrumen-Spur, der dein zukünftiges Ich zurück in den Kontext folgt.

### 2026-06-30 — Produktname „kiumu" (ADR-0011)
- **Erledigt:** Arbeitstitel „Habit Tracker" / Repo-Codename `habit-tracker` in der Doku durch kiumu ersetzt (README, PRD, GLOSSARY, ROADMAP, TECHNICAL_SPEC, DESIGN, AGENTS, STATUS).
- **Als Nächstes:** Felder und Spalten pro Tabelle finalisieren.
- **Offen:** Visualisierung der Investition im UI.

### 2026-06-22 — Datenmodell-Grundsatzentscheidungen
- **Erledigt:** Offene Modellierungsfragen aus TECHNICAL_SPEC aufgelöst. Festgelegt: berechneter Kontostand statt Speicherung, Investieren als append-only Kontobuch, Rückholung als Gegenbuchung. Ziel-Lösch-Regeln definiert.
- **Als Nächstes:** Felder und Spalten pro Tabelle finalisieren.
- **Offen:** Visualisierung der Investition im UI, Namensfindung.

### 2026-06-22 — Projekt-Kickoff
- **Erledigt:** Idee geschärft; Geldbörsen-Modell festgelegt; Stack entschieden
  (TypeScript, React/Next.js, Supabase, später React Native); komplettes
  Dokumentations-Fundament angelegt (PRD, Tech-Spec, Entscheidungs-Log, Roadmap,
  Glossar, Arbeitsweisen, KI-Zusammenarbeit, Design-Stub, AGENTS.md + CLAUDE.md).
- **Als Nächstes:** Datenmodell für Phase 1 entwerfen.
- **Offen:** siehe „Offene Fragen" oben.

---

## Vorlage für neue Session-Einträge (kopieren)

```
### YYYY-MM-DD — Kurztitel
- **Erledigt:** …
- **Als Nächstes:** …
- **Offen / Stolpersteine:** …
```
