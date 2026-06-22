# Entscheidungs-Log (Architecture Decision Records)

> **Warum gibt es diese Datei?** Code zeigt *was* gebaut wurde, aber nicht *warum*.
> Genau das „Warum" wird nach einer Pause zuerst vergessen. Jede nicht-triviale
> Entscheidung bekommt hier einen kurzen, datierten Eintrag (ein „ADR").
>
> **Regel:** Append-only. Einträge werden nicht gelöscht. Wird eine Entscheidung
> später revidiert, schreibt man einen **neuen** Eintrag, der den alten als
> „abgelöst durch ADR-XXXX" markiert. So bleibt die Denkgeschichte nachvollziehbar.
>
> **Format pro Eintrag:** Status · Kontext (Problem) · Entscheidung · Begründung ·
> Konsequenzen/Alternativen.

---

## ADR-0001 — Wir führen ein Entscheidungs-Log
- **Datum:** 2026-06-22
- **Status:** Aktiv
- **Kontext:** Das Projekt ist ein Solo-Projekt mit potenziell langen Pausen. Das
  Wissen, *warum* etwas so ist, droht verloren zu gehen.
- **Entscheidung:** Wir dokumentieren größere Entscheidungen als ADRs in dieser
  Datei (append-only, datiert, mit Begründung).
- **Begründung:** Ein einzelnes, chronologisches Log ist für eine Person leichter
  zu pflegen als viele Einzeldateien und genau das, was beim Wiedereinstieg hilft.
- **Konsequenzen:** Minimaler Mehraufwand pro Entscheidung; dafür bleibt die
  Begründung dauerhaft erhalten.

## ADR-0002 — Geldbörsen-Modell statt Zähler-Modell
- **Datum:** 2026-06-22
- **Status:** Aktiv
- **Kontext:** Punkte könnten auf zwei grundverschiedene Arten funktionieren:
  (a) *Geldbörse* — Punkte sind ausgebbares Guthaben, einmal investiert sind sie
  weg; Ziele konkurrieren um Punkte. (b) *Zähler* — jedes Ziel hat einen eigenen
  Fortschritt, eine erfüllte Gewohnheit zählt einfach überall hoch, kein Ausgeben.
- **Entscheidung:** Geldbörsen-Modell.
- **Begründung:** Das Ausgeben ist eine bewusste Ressourcen-Entscheidung und
  erzeugt genau das motivierende „behalten oder investieren?"-Gefühl. Das ist der
  Kern der gewünschten Gamification.
- **Konsequenzen:** Datenmodell braucht einen sauberen Geldbörsen-Saldo und eine
  Investitions-Logik. Etwas mehr Aufwand als das Zähler-Modell, aber inhaltlich
  gewollt.

## ADR-0003 — Erst „Schritt für Schritt investieren", Ansparen später
- **Datum:** 2026-06-22
- **Status:** Aktiv
- **Kontext:** Zwei Kauf-Varianten sind denkbar: Punkte nach und nach in ein Ziel
  investieren, oder erst bei vollem Preis kaufen. Beide könnten später pro Ziel
  einstellbar sein.
- **Entscheidung:** Für die erste Version nur **eine** Variante bauen: Schritt für
  Schritt investieren. Ansparen-Variante und Pro-Ziel-Einstellung kommen später.
- **Begründung:** Schrittweises Investieren liefert häufigeres positives Feedback
  (öfter „Dopamin-Tropfen"). Außerdem: Disziplinierter Scope. Das allgemeinere
  Modell „Geldbörse + Investitions-Topf pro Ziel" enthält den Ansparen-Fall ohnehin
  als Spezialfall, lässt sich also später ergänzen, ohne alles umzubauen.
- **Konsequenzen:** Weniger Einstellungen in V1; klarer Fokus. Ansparen ist als
  Erweiterung vorgemerkt.

## ADR-0004 — Earmarking erst später
- **Datum:** 2026-06-22
- **Status:** Aktiv
- **Kontext:** Wunsch, dass für ein Ziel nur Punkte aus bestimmten Gewohnheiten
  zählen (z. B. „nur Geschirr-Punkte fürs Spiel").
- **Entscheidung:** Earmarking ist nicht Teil von Version 1; es wird später
  nachgerüstet.
- **Begründung:** „Cool im Kopf, teuer im Code." Es kompliziert Datenmodell und
  UI deutlich, ist aber problemlos ergänzbar, sobald die Kernschleife steht. Das
  bewusste Kleinhalten des ersten Wurfs ist selbst eine wichtige Profi-Fähigkeit.
- **Konsequenzen:** Datenmodell so anlegen, dass eine Verknüpfung Ziel ↔ Gewohnheit
  später ergänzt werden kann, ohne sie jetzt schon auszuwerten.

## ADR-0005 — Kein-Bestrafungs-Prinzip
- **Datum:** 2026-06-22
- **Status:** Aktiv
- **Kontext:** Häufigster Abbruchgrund bei Habit-Trackern ist Scham nach einem
  gebrochenen Streak.
- **Entscheidung:** Ein nicht geschaffter Tag kostet keine Punkte und wirft den
  Ziel-Fortschritt nicht zurück. Streaks dürfen brechen, aber es gibt keine Strafe.
- **Begründung:** Schützt die Zielgruppe vor dem „jetzt ist eh alles egal"-Effekt
  und fördert ehrliches Weitertracken. Dies ist ein Produkt-Leitprinzip, kein Detail.
- **Konsequenzen:** Logik und UI dürfen nie Punkte abziehen oder Fortschritt
  zurücksetzen. Motivation entsteht über positives Feedback, nicht über Verlust.

## ADR-0006 — Stack: TypeScript, React/Next.js, Supabase, React Native (Expo)
- **Datum:** 2026-06-22
- **Status:** Aktiv
- **Kontext:** Der Entwickler kennt TypeScript, Vue und (zuletzt, vor > 1 Jahr)
  React; Backend/DB/Auth sind weitgehend Neuland. Mobile-Apps für iOS/Android sind
  erklärtes Fernziel. Eingerostete Skills, abends nebenbei, mit KI-Unterstützung.
- **Entscheidung:** TypeScript durchgängig; React über Next.js fürs Web; Supabase
  für Backend, Datenbank und Auth; später React Native (Expo) für Mobile; Vercel
  fürs Deployment.
- **Begründung:**
  - *React/Next.js:* jüngster Bezugspunkt des Entwicklers; deployt auf das bereits
    bekannte Vercel; React-Wissen überträgt sich direkt auf React Native (Mobile-Ziel).
    Vue würde fürs Web auch gehen, macht die Mobile-Etappe aber umständlicher.
  - *Supabase:* nimmt das sicherheitskritische, für Einsteiger undankbare Selbst-
    Schreiben von Auth ab; bietet echtes PostgreSQL (also lernt man richtiges
    relationales Modellieren und SQL, kein Spielzeug); dieselbe Bibliothek bedient
    später Web und Mobile; großzügige Gratis-Stufe; breit in der Industrie verwendet
    → macht den Weg zum echten Produkt realistischer.
- **Konsequenzen:** Lernfokus liegt klar auf Backend/DB/Auth über Supabase. Es
  besteht das Risiko, Supabase als „Black Box" zu benutzen → bewusst gegensteuern
  (siehe ADR-0007).
- **Verworfene Alternative:** Backend „von Hand" (eigener Server, DB selbst anbinden).
  Begründung der Ablehnung: Für eine Frontend-fokussierte Rückkehr ist handgeschriebenes
  Backend-Plumbing **nicht** das, was anstellbar macht; es kostet Zeit, die besser in
  Frontend-Handwerk und ins Shipping fließt. Supabase vermittelt die *relevante*
  Backend-Kompetenz (SQL, Datenmodell, Auth-Konzepte) ohne den Zeitfresser.

## ADR-0007 — KI im „Lern-Modus", nicht als Black Box
- **Datum:** 2026-06-22
- **Status:** Aktiv
- **Kontext:** Das letzte Projekt entstand „mit heftiger KI-Unterstützung" → viel
  Ergebnis, wenig bleibender Skill. Ziel diesmal: Skills wirklich verbessern.
- **Entscheidung:** KI wird gezielt im Lern-Modus eingesetzt: erst erklären lassen,
  dann selbst tippen (bei Kernlogik/neuen Konzepten), dann von der KI gegenlesen
  lassen. Boilerplate/Konfiguration darf die KI übernehmen. Kein Code wird
  akzeptiert, den der Entwickler nicht erklären kann.
- **Begründung:** Verständnis ist das eigentliche Projektziel und zugleich der
  Marktvorteil — gerade weil viele Leute KI-generierte Apps shippen, zählt
  „versteht, was läuft" mehr, nicht weniger.
- **Konsequenzen:** Etwas langsamer als „KI baut alles", aber nachhaltiger.
  Details und Prompting-Praktiken in [AI_COLLABORATION.md](AI_COLLABORATION.md).

## ADR-0008 — AGENTS.md als Quelle der Wahrheit, CLAUDE.md als dünne Brücke
- **Datum:** 2026-06-22
- **Status:** Aktiv
- **Kontext:** Es soll mit *beliebigen* KI-Tools gearbeitet werden können, nicht
  nur mit Claude. Verschiedene Tools lesen verschiedene Anweisungsdateien.
- **Entscheidung:** `AGENTS.md` (vendor-neutraler offener Standard) ist die einzige
  Quelle der Wahrheit für Agenten-Anweisungen. `CLAUDE.md` ist nur eine dünne
  Brücke, die per `@AGENTS.md`-Import auf den gemeinsamen Inhalt verweist.
- **Begründung:** AGENTS.md wird nativ von vielen Tools gelesen (Cursor, Codex,
  Copilot, Gemini CLI, Windsurf, Aider u. a.) und unter dem Dach der Linux
  Foundation gepflegt. Claude Code liest aktuell nur CLAUDE.md, nicht AGENTS.md —
  daher die Brücke. So gibt es **eine** Datei zu pflegen, von der alle Tools
  profitieren, statt mehrerer driftender Kopien.
- **Konsequenzen:** Inhaltliche Agenten-Anweisungen immer in AGENTS.md pflegen.
  CLAUDE.md bleibt minimal (nur Claude-spezifische Abweichungen, falls überhaupt).

---

## Vorlage für neue Einträge (kopieren)

```
## ADR-XXXX — Kurztitel
- **Datum:** YYYY-MM-DD
- **Status:** Aktiv / Abgelöst durch ADR-YYYY / Verworfen
- **Kontext:** Welches Problem/welche Frage stand an?
- **Entscheidung:** Was wurde entschieden?
- **Begründung:** Warum diese Option?
- **Konsequenzen:** Was folgt daraus? Welche Alternativen wurden verworfen und warum?
```
