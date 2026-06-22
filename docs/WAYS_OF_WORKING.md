# Arbeitsweisen (Ways of Working)

> Wie an diesem Projekt gearbeitet wird — als Solo-Entwickler, abends nebenbei,
> mit der Anforderung, nach Monaten Pause wieder einsteigen zu können. Bewusst
> schlank: nur Praktiken, die für **eine Person** echten Nutzen bringen.

| | |
|---|---|
| **Letzte Aktualisierung** | 2026-06-22 |

---

## 1. Grundhaltung

- **Verständnis vor Tempo.** Das Projekt ist auch ein Lernvehikel. Ein Stück, das
  verstanden ist, ist mehr wert als drei, die nur funktionieren.
- **Klein vor groß.** Lieber ein winziges Feature komplett fertig (end-to-end),
  als fünf Features halb. Scope bewusst klein halten ist eine Kern-Fähigkeit, kein
  Verzicht.
- **Das Repo ist das Gedächtnis.** Entscheidungen, Stand und Begründungen leben in
  den Dokumenten, nicht im Kopf. Was nicht aufgeschrieben ist, ist nach drei
  Monaten weg.

## 2. Vertikale Scheiben statt horizontaler Schichten

Features werden als **dünne, vollständige Scheibe** durch alle Schichten gebaut,
nicht Schicht für Schicht.

- ✅ Gut: „Eine Gewohnheit anlegen" — von der UI über den Datenzugriff bis in die
  Datenbank, komplett, dann sichtbar nutzbar.
- ❌ Vermeiden: „zuerst alle Datenbanktabellen, dann alle APIs, dann die ganze UI."
  Das fühlt sich produktiv an, liefert aber lange nichts Benutzbares und versteckt
  Fehler bis zum Schluss.

Grund: Jede fertige Scheibe gibt sofort Feedback, hält die Motivation hoch und
deckt Integrationsprobleme früh auf.

## 3. Das Session-Ritual (wichtigste Gewohnheit fürs Projekt selbst)

Eat your own dogfood: Die Anforderung „nach Pause wieder einsteigen können" wird
durch ein kleines Ritual erfüllt.

**Zu Beginn jeder Session:**
1. [STATUS.md](STATUS.md) lesen — wo stehe ich, was war als Nächstes geplant?
2. Den letzten Eintrag in [DECISIONS.md](DECISIONS.md) überfliegen, falls relevant.

**Am Ende jeder Session:**
1. [STATUS.md](STATUS.md) aktualisieren: „Aktueller Fokus", „Nächste Schritte",
   „Offene Fragen" — und einen kurzen Session-Log-Eintrag (erledigt / als Nächstes / offen).
2. Ist eine nicht-triviale Entscheidung gefallen? → kurzer ADR in DECISIONS.md.
3. Committen und pushen (siehe Git unten), damit nichts nur lokal liegt.

Diese fünf Minuten am Ende sind der eigentliche Schutz gegen das Vergessen.

## 4. Definition of Done (pro Feature)

Ein Feature gilt als fertig, wenn:

- [ ] es **end-to-end** funktioniert (UI → Daten → DB und zurück),
- [ ] der **Happy Path manuell getestet** ist (einmal real durchklicken),
- [ ] **keine Fehler in der Browser-Konsole** auftauchen,
- [ ] der Entwickler **jede Zeile erklären kann** (sonst: von der KI erklären
      lassen, bis es sitzt — siehe [AI_COLLABORATION.md](AI_COLLABORATION.md)),
- [ ] es mit einer **klaren Commit-Nachricht committet** und **gepusht** ist,
- [ ] STATUS.md aktualisiert ist.

(Automatisierte Tests sind in Phase 1 kein Muss, aber willkommen, wo sie leicht
fallen. Spätestens wenn Logik komplexer wird, lohnen sie sich.)

## 5. Git & Versionierung

- **GitHub von Anfang an.** Backup, Historie und zugleich ein vorzeigbares
  Portfolio-Artefakt.
- **Klein und oft committen.** Ein Commit = ein abgeschlossener Gedanke. Lieber
  viele kleine als ein riesiger „alles Mögliche"-Commit.
- **Aussagekräftige Commit-Nachrichten**, locker an *Conventional Commits* angelehnt:
  - `feat: Ziel anlegen ermöglichen`
  - `fix: Punktestand nach Investition korrekt aktualisieren`
  - `docs: Datenmodell in TECHNICAL_SPEC ergänzen`
  - `chore: Projekt-Setup mit Next.js und TypeScript`
  - `refactor: Geldbörsen-Logik in eigene Funktion ziehen`
- **Branches:** Solo ist Arbeiten auf `main` okay. Für größere oder riskante
  Features ein Feature-Branch (`feat/...`) — gute Übung fürs spätere Teamumfeld.
- **Niemals Secrets committen** (`.env`, Supabase-Schlüssel). Eine `.gitignore`
  von Beginn an; siehe Sicherheitshinweise in [TECHNICAL_SPEC.md](TECHNICAL_SPEC.md)
  und [AGENTS.md](../AGENTS.md).

## 6. Aufgaben & Planung

- Pro Phase werden Aufgaben grob in [STATUS.md](STATUS.md) (nächste Schritte) und
  [ROADMAP.md](ROADMAP.md) gehalten. Ein schwergewichtiges Ticket-System ist für
  eine Person Overkill.
- Wenn eine Aufgabe sich „zu groß" anfühlt, ist das das Signal, sie in kleinere
  vertikale Scheiben zu zerlegen.
- Die „Nicht in Scope"-Liste im [PRD.md](PRD.md) ist bewusster Schutz vor
  Verzetteln. Neue Ideen wandern dorthin, statt sofort gebaut zu werden.

## 7. Werkzeuge

- **Editor:** VS Code (gute KI- und TypeScript-Integration).
- **Versionierung:** Git + GitHub.
- **Deployment:** Vercel.
- **Backend/DB/Auth:** Supabase (Dashboard + Client-Bibliothek).
- **KI:** siehe [AI_COLLABORATION.md](AI_COLLABORATION.md). Für agentisches Arbeiten
  direkt im Repo liest Claude Code automatisch [CLAUDE.md](../CLAUDE.md) →
  [AGENTS.md](../AGENTS.md); im Chat-Interface werden die relevanten Dokumente
  stattdessen angehängt/eingefügt.

## 8. Wartung der Dokumentation (Realismus)

Nicht alles ständig pflegen. Lebendig halten: **STATUS.md** (jede Session) und
**DECISIONS.md** (bei jeder Entscheidung). Der Rest sind stabile Nachschlagewerke,
die nur bei echten Änderungen angefasst werden. Lieber wenige, aktuelle Dokumente
als viele, die niemand mehr glaubt.
