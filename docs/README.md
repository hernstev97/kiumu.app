# Kiumu

> Ein gamifizierter Habit-Tracker mit Punkte-Ökonomie. Du erfüllst Gewohnheiten,
> verdienst Punkte und gibst sie für selbst gesetzte Ziele aus. Lern- und
> Produktprojekt zugleich.

**Produktname:** Kiumu (Aussprache „kju-mu"). Repo: `kiumu`, Domain: `kiumu.app`.

---

## Was ist das hier?

Dieses Repository ist nicht nur Code, sondern auch das **Gedächtnis des Projekts**.
Es ist so aufgebaut, dass du (oder eine beliebige KI, die mit dir arbeitet) nach
Wochen oder Monaten Pause hier reinschauen und in wenigen Minuten wieder wissen
kannst: *Was bauen wir, warum so, und wo stehe ich gerade?*

## Wenn du nach einer Pause zurückkommst — lies in dieser Reihenfolge

1. **Dieses README** — der Überblick (du bist hier).
2. **[docs/STATUS.md](docs/STATUS.md)** — wo stehe ich *gerade*? Was war zuletzt dran, was ist als Nächstes geplant, welche Fragen sind offen? **Das ist die wichtigste Datei nach einer Pause.**
3. **[docs/DECISIONS.md](docs/DECISIONS.md)** — *warum* ist etwas so, wie es ist? Hier steht die Begründung hinter jeder größeren Entscheidung. Das ist das Wissen, das sonst zuerst vergessen wird.
4. **[docs/ROADMAP.md](docs/ROADMAP.md)** — die großen Phasen und was zu welcher gehört.
5. Danach die Detail-Dokumente je nach Bedarf (siehe Doku-Karte unten).

## Doku-Karte — welches Dokument wofür?

| Dokument | Beantwortet die Frage … | Wie oft aktuell halten? |
|---|---|---|
| [docs/PRD.md](docs/PRD.md) | *Was* bauen wir und für wen? (Produkt, Nutzer, Scope, Features) | Selten — bei echten Scope-Änderungen |
| [docs/TECHNICAL_SPEC.md](docs/TECHNICAL_SPEC.md) | *Womit* und *wie* technisch? (Stack, Architektur, Datenmodell, Auth) | Wenn technische Entscheidungen fallen |
| [docs/DECISIONS.md](docs/DECISIONS.md) | *Warum* haben wir uns so entschieden? | **Bei jeder nicht-trivialen Entscheidung (append-only)** |
| [docs/ROADMAP.md](docs/ROADMAP.md) | In welcher *Reihenfolge* bauen wir? | Bei Phasenwechseln |
| [docs/STATUS.md](docs/STATUS.md) | Wo stehe ich *jetzt*? | **Am Ende jeder Arbeitssession** |
| [docs/GLOSSARY.md](docs/GLOSSARY.md) | Was bedeutet ein Begriff *genau*? (Habit, Punkt, Geldbörse, Ziel …) | Wenn neue Begriffe entstehen |
| [docs/WAYS_OF_WORKING.md](docs/WAYS_OF_WORKING.md) | *Wie* arbeite ich (Methodik, Git, Definition of Done)? | Selten |
| [docs/AI_COLLABORATION.md](docs/AI_COLLABORATION.md) | Wie nutze und prompte ich KI sinnvoll? | Selten — wächst mit Erfahrung |
| [docs/DESIGN.md](docs/DESIGN.md) | Wie sieht es aus und fühlt es sich an? (Design-Sprache) | Ab Phase 2 |
| [AGENTS.md](AGENTS.md) | Anweisungen für KI-Agenten (Konventionen, Befehle, Grenzen) | Wenn sich Konventionen/Befehle ändern |
| [CLAUDE.md](CLAUDE.md) | Brücke für Claude Code zu AGENTS.md | Fast nie |

> **Wartungs-Realismus:** Nicht alle Dateien müssen ständig gepflegt werden.
> Halte vor allem **STATUS.md** und **DECISIONS.md** lebendig — das sind die zwei,
> die dein zukünftiges Ich rettet. Der Rest sind stabilere Nachschlagewerke.

## Tech-Stack in einer Zeile

TypeScript · React (Next.js) fürs Web · Supabase (Postgres, Auth, Backend) · später React Native (Expo) für iOS/Android. Deployment über Vercel.

## Aktueller Stand in einer Zeile

Projekt-Setup & Dokumentation. Noch kein Code. Nächster inhaltlicher Schritt: Datenmodell für Phase 1 (siehe [docs/STATUS.md](docs/STATUS.md)).
