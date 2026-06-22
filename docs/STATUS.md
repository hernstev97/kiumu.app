# STATUS — wo stehe ich gerade?

> **Die wichtigste Datei nach einer Pause.** Sie beantwortet in 60 Sekunden:
> Was ist der Stand, was war zuletzt dran, was ist als Nächstes geplant, was ist
> offen? Sie wird **am Ende jeder Arbeitssession** aktualisiert.
>
> Halte sie kurz und ehrlich. Lieber zwei knappe Sätze als ein perfekter Absatz.

| | |
|---|---|
| **Letzte Aktualisierung** | 2026-06-22 |
| **Aktuelle Phase** | Phase 0 — Fundament (siehe [ROADMAP.md](ROADMAP.md)) |
| **Aktueller Branch** | – (noch kein Code-Repo initialisiert) |

---

## 🎯 Aktueller Fokus

Dokumentations-Fundament steht. Der nächste inhaltliche Schritt ist das
**Datenmodell für Phase 1** — der erste bewusste „unter die Haube schauen"-Moment,
in dem aus der Produktidee konkrete Tabellen werden.

## ⏭️ Nächste konkrete Schritte

1. Datenmodell gemeinsam entwerfen (Entitäten, Felder, Beziehungen) — siehe offene
   Fragen in [TECHNICAL_SPEC.md](TECHNICAL_SPEC.md), Abschnitt 3.
2. Entscheidung „Punktestand gespeichert vs. berechnet" treffen → als ADR festhalten.
3. Projekt scaffolden (Next.js + TypeScript), Git/GitHub aufsetzen.
4. Supabase-Projekt anlegen; Tabellen + Row Level Security für das Datenmodell.

## ❓ Offene Fragen (entscheiden, bevor sie blockieren)

- Punktestand: gespeicherter Wert oder aus den Tracking-Einträgen berechnet?
- Wie wird „investiert" sauber abgebildet (Saldo stimmt immer, nichts zählt doppelt)?
- Was passiert mit investierten Punkten, wenn ein Ziel gelöscht/geändert wird?
- Wie wird das tägliche Investieren visualisiert (Balken, Schritte, …)?
- Produktname (Arbeitstitel „Habit Tracker" ersetzen).

## 🚧 Bekannte Probleme / Stolpersteine

- (Noch keine — es gibt noch keinen Code.)

---

## 📓 Session-Log (neueste zuerst)

> Pro Session ein kurzer Eintrag: erledigt / als Nächstes / offen. Das ist die
> Brotkrumen-Spur, der dein zukünftiges Ich zurück in den Kontext folgt.

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
