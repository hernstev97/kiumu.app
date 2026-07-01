# Product Requirements Document (PRD) — kiumu

> Was bauen wir, für wen, und woran erkennen wir Erfolg.
> Dieses Dokument beschreibt das **Produkt**, nicht die Technik (die steht in
> [TECHNICAL_SPEC.md](TECHNICAL_SPEC.md)).

| | |
|---|---|
| **Status** | Lebendiger Entwurf |
| **Letzte Aktualisierung** | 2026-06-30 |
| **Produktname** | kiumu |

---

## 1. Vision

Ein Habit-Tracker, der sich anfühlt wie ein Spiel statt wie eine Pflicht. Statt
nur abzuhaken, **verdienst** du für jede erfüllte Gewohnheit eine echte Währung
(Punkte) und **gibst** sie für selbst gewählte Belohnungen (Ziele) aus. Dadurch
wird langfristige Motivation an kurzfristige, sichtbare Fortschritte gekoppelt.

## 2. Problem

Klassische Habit-Tracker scheitern oft an zwei Dingen:

- **Fehlende kurzfristige Belohnung.** Der Nutzen einer Gewohnheit liegt weit in
  der Zukunft; das tägliche Abhaken fühlt sich folgenlos an.
- **Scham nach einem Rückschlag.** Ein gebrochener Streak erzeugt ein „jetzt ist
  eh alles egal"-Gefühl und führt zum kompletten Abbruch.

Dieses Produkt adressiert beides: sichtbare, sofort ausgebbare Belohnung — und
ein bewusst **straffreies** Design (siehe Leitprinzipien).

## 3. Zielgruppe

- Menschen, die Gewohnheiten etablieren oder ändern wollen.
- Menschen mit Schwierigkeiten bei langfristiger Motivation. Der visualisierte
  tägliche Fortschritt kann besonders für Menschen mit ADHS hilfreich sein.
- Alle, die einen spielerischen Zugang zum Habit-Tracking suchen.

> Der Entwickler selbst ist Teil der Zielgruppe — das Produkt soll im Alltag
> tatsächlich genutzt werden („dogfooding"). Das ist ein bewusster Vorteil.

## 4. Leitprinzipien (das Herz des Produkts)

Diese Prinzipien gewinnen im Zweifel gegen einzelne Features.

1. **Keine Bestrafung.** Ein nicht geschaffter Tag kostet **keine** Punkte und
   wirft den Ziel-Fortschritt **nicht** zurück. Der Streak einer Gewohnheit darf
   unterbrochen werden, aber der Nutzer wird nie bestraft — nur auf natürliche
   Weise motiviert, ehrlich weiterzumachen.
2. **Befriedigendes Feedback.** Das Abhaken und das Investieren von Punkten muss
   sich gut anfühlen — Animationen, Fortschrittsbalken, kleine Belohnungen. Ziel
   ist ein positiver „Dopamin-Tropfen", der die App mit guten Gefühlen verknüpft.
3. **Einfach und klar.** Das Interface bleibt schlicht. Lieber wenige Dinge, die
   sich rund anfühlen, als viele Funktionen, die überfordern.
4. **Ehrlichkeit ermöglichen.** Das System darf nie einen Anreiz schaffen, sich
   selbst zu belügen. Tracking soll sich lohnen, ohne dass Schummeln nötig wird.

## 5. Kernkonzept: die Punkte-Ökonomie

- **Verdienen:** Jede an einem Tag erfüllte Gewohnheit bringt **1 Punkt**.
- **Geldbörse (Wallet):** Verdiente Punkte sammeln sich in einer Geldbörse. Der
  Nutzer kann sie aufsparen und beim Wachsen zusehen — oder sofort ausgeben.
- **Ziele:** Der Nutzer definiert Ziele (z. B. ein Spiel, eine Reise, ein Snack)
  mit Name, Beschreibung und einem **Preis** in Punkten.
- **Investieren:** Punkte werden aus der Geldbörse in Ziele investiert. Ein Punkt
  ist eine echte Ressource — einmal ausgegeben, ist er weg. Dadurch konkurrieren
  Ziele um die Punkte, und Ausgeben ist eine bewusste Entscheidung.

> **Modell-Entscheidung:** Es gilt das *Geldbörsen-Modell* (Punkte sind ausgebbares
> Guthaben), **nicht** ein bloßes Zähler-Modell. Begründung siehe
> [DECISIONS.md](DECISIONS.md) → ADR-0002.

### Zwei Kauf-Varianten (eine davon zuerst)

- **Schritt für Schritt investieren:** Punkte fließen nach und nach in ein Ziel;
  der Fortschritt wächst sichtbar mit jeder Investition. *(Wird zuerst gebaut —
  häufigeres Feedback.)*
- **Vollen Preis ansparen:** Ein Ziel kann erst „gekauft" werden, wenn das
  Guthaben den vollen Preis erreicht. *(Später; ggf. pro Ziel einstellbar.)*

Begründung und geplante Reihenfolge: [DECISIONS.md](DECISIONS.md) → ADR-0003.

## 6. Scope

### In Scope — Version 1 (Phase 1, siehe ROADMAP)

- Anlegen von Gewohnheiten (Anzahl frei wählbar).
- Tägliches Eintragen pro Gewohnheit: erfüllt / nicht erfüllt.
- Automatisches Gutschreiben von Punkten in die Geldbörse.
- Anlegen von Zielen mit Name, Beschreibung und Preis.
- Investieren von Punkten in Ziele (eine Kauf-Variante: Schritt für Schritt).
- Übersicht: aktuelle Gewohnheiten und aktueller Ziel-Fortschritt.
- Login & Registrierung (echte Nutzerkonten, serverseitig).

### Bewusst (noch) NICHT in Scope

> Diese Dinge sind „cool im Kopf, teuer im Code" — sie kommen später, sobald die
> Kernschleife steht und sich gut anfühlt.

- **Earmarking** (dass nur Punkte aus einer bestimmten Gewohnheit für ein
  bestimmtes Ziel zählen, z. B. „nur Geschirr-Punkte fürs Spiel"). Reizvoll, aber
  später nachrüstbar.
- Ansparen-Variante & Pro-Ziel-Einstellung der Kauf-Logik.
- Historische Ansichten, Kalender, Graphen.
- Streaks als sichtbares Feature, Pausieren/Archivieren von Gewohnheiten.
- Erinnerungen/Benachrichtigungen.
- Abzeichen/Meilensteine, soziale Funktionen, Teilen.
- Bezahlmodell/Premium.

### Zukunft (erstrebenswert, langfristig)

- **Bezahlmodell / Premium-Funktionen** — ausdrücklich gewünschtes Fernziel.
- Historie & Graphen (Fortschritt pro Gewohnheit über Zeit, Punkte pro Tag).
- Erinnerungen, Abzeichen, Gruppen-Challenges, soziales Element.
- Virtuelle Belohnungen / Anpassungsoptionen, für die Punkte ausgegeben werden.
- **Tier-/Stufen-System für Ziele:** Ein Ziel mit mehreren Preisstufen (Fortschritt zählt weiter, ab der ersten Stufe einlösbar).

## 7. Hauptfunktionen (Gesamtbild, über alle Phasen)

- Gewohnheiten anlegen, bearbeiten, (später) pausieren/archivieren.
- Täglicher Status pro Gewohnheit.
- Punkte automatisch sammeln (Geldbörse).
- Ziele definieren (Name, Beschreibung, Preis/benötigte Punkte).
- Ziele mit einer oder mehreren Gewohnheiten verknüpfen.
- Punkte in Ziele investieren; Fortschritt visualisieren.
- Übersicht über Gewohnheiten (inkl. später Streak/Erfolgsquote) und Ziele.

## 8. Offene Produktfragen

Diese sind bewusst noch nicht entschieden und gehören diskutiert, bevor sie
relevant werden:

- Wie genau wird das tägliche Investieren visualisiert (Balken, Schritte, etwas
  anderes)? Dieses Feedback ist motivational zentral.
- Wie flexibel müssen Änderungen an Gewohnheiten/Zielen sein, ohne den
  Fortschritt zu zerstören?

*(Bereits entschieden:)*
- **Gelöschte Ziele:** Ziel ohne Punkte -> frei löschbar. Abgeschlossenes Ziel -> frei löschbar (keine Rückzahlung). Ziel mit investierten Punkten -> erst Punkte zurückholen (Gegenbuchung), dann löschbar.
- **Kauf-Variante:** "Schritt für Schritt investieren" und "Ansparen" sind technisch derselbe append-only Kontobuch-Mechanismus (nur unterschiedliches Nutzerverhalten). Eine Investition ist gedeckelt beim Zielpreis.

## 9. Erfolgskriterien

Weil dies zugleich ein Lernprojekt ist, gibt es zwei Ebenen:

- **Produkt:** Der Entwickler nutzt die App freiwillig im eigenen Alltag. Die
  Kernschleife (abhaken → Punkte → investieren) fühlt sich befriedigend an.
- **Lernen:** Der Entwickler kann jede Schicht der App erklären — inklusive der
  Teile, die Supabase übernimmt (Auth, Datenmodell, SQL). Kein „Black Box"-Wissen.
