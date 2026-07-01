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

## ADR-0009 — Punktestand berechnet statt gespeichert (Kontobuch-Modell)
- **Datum:** 2026-06-22
- **Status:** Aktiv
- **Kontext:** Soll der Punktestand (Geldbörse) als fester Wert gespeichert oder aus Transaktionen berechnet werden?
- **Entscheidung:** Der Punktestand wird berechnet. Es gibt keine `wallet`-Tabelle. Saldo = (Summe verdienter Punkte aus `habit_entries`) − (Summe aller `investments`). Jede an einem Tag erfüllte Gewohnheit bringt 1 Punkt. Doppelzählungen werden durch einen Eindeutigkeits-Index auf (Gewohnheit, Tag) verhindert.
- **Begründung:** Bietet eine Single Source of Truth (SSOT), der Stand kann nicht durch Fehler asynchron driften. In Phase 1 ist Performance unkritisch. Es schult das saubere Kontobuch-Denken.
- **Konsequenzen:** Geldbörsensaldo muss bei Aufruf aggregiert werden. Die Speicherung von Tracking-Einträgen und Investitionen wird die einzige Basis für Punkte.

## ADR-0010 — Investitionen als append-only Kontobuch; Rückholung als Gegenbuchung; Ziel-Lösch-Regeln
- **Datum:** 2026-06-22
- **Status:** Aktiv
- **Kontext:** Wie werden Investitionen getätigt und was passiert, wenn Punkte zurückgeholt oder Ziele gelöscht werden sollen? Auch die Kauf-Variante bedarf Klarheit (Präzisierung von ADR-0003).
- **Entscheidung:** Investieren ist ein append-only Kontobuch (Ledger). Eine Investition bewegt Punkte. "Schritt für Schritt investieren" und "Ansparen" sind technisch derselbe Mechanismus. Eine Investition wird in V1 beim Zielpreis gedeckelt. Ziele erhalten einen Ereignis-Zeitstempel (`purchased_at`) statt eines gespeicherten Saldos. Zurückholen von Punkten geschieht **nur** über Gegenbuchungen, niemals durch Löschen von Daten. Ziel-Lösch-Regeln greifen basierend auf investierten Punkten und Abschluss-Status.
- **Begründung:** Im Sinne der Daten-Integrität werden Daten nicht gelöscht (append-only). Dies verhindert das Kein-Bestrafungs-Prinzip (ADR-0005) zu verletzen und wahrt die Historie.
- **Konsequenzen:** Präzisiert ADR-0003 (eine einheitliche Mechanik) und unterstützt ADR-0005.


## ADR-0011 — Produktname: „kiumu" (Kunstwort)
- **Datum:** 2026-06-30
- **Status:** Aktiv
- **Kontext:** Der Arbeitstitel „Habit Tracker" musste durch einen echten
  Produktnamen ersetzt werden (offene Frage seit Kickoff). Randbedingungen:
  möglichst englisch (App-Store, internationale Skalierung, Stack-Sprachraum);
  **keine** Wortspiele mit „habit" oder „track" (Namensfeld übersättigt, Domains
  und Store-Namen praktisch alle vergeben).
- **Entscheidung:** Der Name ist **kiumu** — ein erfundenes Wort ohne
  Wörterbuch-Bedeutung, **abgeleitet von „Cumulus"**. Aussprache festgelegt auf
  **„kju-mu"**. Domain `kiumu.app` ist gesichert (über Vercel registriert,
  ~12 $ im ersten Jahr, danach 15 $); passt nativ zum Next.js-/Vercel-Setup.
  Instagram-Handle gesichert; weitere Socials folgen.
- **Begründung:**
  - *Herkunft (aus dem Design entstanden):* Abgeleitet von „Cumulus"
    (Haufenwolke; Wortwurzel von „accumulate" — passt zum Anhäufen von Punkten in
    der Geldbörse). Auslöser war die konkrete Beobachtung, dass die Habit-Ansicht
    aussieht wie helle Wolken vor einem dunkelblauen Nachthimmel. „kiumu" verdichtet
    diese Cumulus-Idee zu einem eigenständigen, kürzeren Kunstwort und trägt damit
    Optik und Mechanik in *einem* Namen.
  - *Einzigartigkeit & Ownability:* Als Kunstwort ist „kiumu" markenrechtlich frei
    (DPMA-Recherche negativ) und SEO-sauber — eine Suche nach „kiumu" führt direkt
    zum Produkt, ohne Konkurrenz durch fremde Treffer. Genau das löst die Schwäche
    bedeutungstragender Wörter (s. u. Cumulus): „Cumulus" selbst ist generisch und
    überlaufen, „kiumu" behält die Assoziation, ohne den Ballast.
  - *Klang passt zum Produkt:* weiche, vokallastige Laute ohne harte Konsonanten —
    stimmig zum straffreien, wertschätzenden Ton (ADR-0005).
  - *Cross-Language-Check unbedenklich:* keine anstößige Bedeutung in größeren
    Sprachen; existiert lediglich als harmloser Ortsname in Ostafrika
    (Uganda/Kenia). Angenehme klangliche Nachbarn: jap. *kumo* = „Wolke" (stützt die
    Wolken-Herkunft sogar), haw. *kumu* = „Quelle/Lehrer/Fundament".
  - *`kiumu.com` ist vergeben, aber leer/geparkt* — kein aktives Produkt, kein
    Wettbewerber, keine Verwechslungsgefahr.
- **Konsequenzen:**
  - Platzhalter „Produktname offen / Arbeitstitel Habit Tracker" in README, PRD,
    GLOSSARY, STATUS und ROADMAP durch „kiumu" ersetzt. Repo-Codename
    `habit-tracker` → `kiumu` umgestellt (noch kein Code → schmerzfrei).
    GitHub-Org/Handle `kiumu` sichern.
  - *Aussprache „kju-mu" konsequent vorgeben* (z. B. in README/Marketing), da ein
    Kunstwort nicht selbsterklärend ist — sonst entscheidet der Markt die Aussprache.
  - *Kunstwort-Tax bewusst akzeptiert:* Das Wort trägt keine eigene Bedeutung →
    Bedeutung muss über Produkt und Design aufgebaut werden (die Cumulus-/Wolken-
    Herkunft liefert dafür den roten Faden, u. a. für DESIGN.md ab Phase 2).
  - **Förmliche Markeneintragung (DPMA/EUIPO) bewusst aufgeschoben** auf eine
    spätere „ernsthaftes Produkt"-Phase (analog ROADMAP Phase 4). Die negative
    DPMA-Recherche genügt für Phase 0; eine Eintragung kostet echtes Geld und ist
    jetzt verfrüht.
  - **Verworfene Alternativen:**
    - *Wortspiele mit habit/track* (z. B. „Habit-at", „Track-tor"): übersättigt,
      Domains/Store-Namen vergeben — von vornherein ausgeschlossen.
    - *Cumulus (direkt):* bedeutungsstark und atmosphärisch (Wolken-Optik der
      Habit-Ansicht, „accumulate"), aber generisch und SEO-überlaufen
      (Wetter-Software, US-Radio, Storage-Umfeld); `.com` weg, `.app` nur
      geparkt/teuer zu kaufen. → Daher die Ableitung „kiumu" statt „Cumulus" selbst.
    - *Cumula:* `cumula.app` bereits von einer konkurrierenden Lern-App belegt —
      zu nahe am eigenen Feld.
    - *qmulo:* klanglich identisch zu **Qumulo**, einer ~346 Mio. $ schweren
      Storage-Firma mit eingetragener Marke und DE-/EMEA-Präsenz → Verwechslungs-
      und Abmahn-Risiko.
    - *Kumulus / Kumulos u. ä. Schreibvarianten:* mehrfach vergeben; zusätzlich
      Buchstabier-Reibung („mit K", „qm").

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
