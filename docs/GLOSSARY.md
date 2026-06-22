# Glossar — Begriffe im Habit Tracker

> Damit Begriffe nach einer Pause (und für jede KI) dieselbe Bedeutung behalten.
> Wenn ein Begriff im Code, in der UI oder in Gesprächen anders verwendet wird als
> hier, ist *einer von beiden* falsch — dann hier korrigieren oder den Code anpassen.

| Begriff | Bedeutung |
|---|---|
| **Gewohnheit / Habit** | Eine vom Nutzer angelegte Sache, die er regelmäßig tun will (z. B. „Geschirr spülen"). |
| **Tracking-Eintrag / Habit-Entry** | Der Status einer Gewohnheit an einem bestimmten Tag: erfüllt oder nicht erfüllt. |
| **Punkt / Point** | Die Spielwährung. Eine an einem Tag erfüllte Gewohnheit bringt genau **1 Punkt**. |
| **Geldbörse / Wallet** | Der gesammelte, noch nicht ausgegebene Punktestand des Nutzers. Aus ihr wird investiert. |
| **Ziel / Goal** | Eine vom Nutzer definierte Belohnung (z. B. ein Spiel, eine Reise) mit Name, Beschreibung und **Preis**. |
| **Preis / Goal Price** | Anzahl Punkte, die ein Ziel kostet bzw. die zum Erreichen nötig sind. |
| **Investieren / Investment** | Punkte aus der Geldbörse einem Ziel zuführen. Investierte Punkte sind ausgegeben — sie verlassen die Geldbörse. |
| **Fortschritt / Progress** | Wie nah ein Ziel an seinem Preis ist (Summe der bisher investierten Punkte). |
| **Kontobuch / Ledger** | Append-only Tabelle für Investitionen. Bewegt Punkte zwischen Geldbörse und Zielen. |
| **Gegenbuchung** | Rückholung von investierten Punkten in die Geldbörse, anstatt Daten zu löschen. |
| **Schritt-für-Schritt-Kauf** | Kauf-Nutzerverhalten: Punkte fließen nach und nach in ein Ziel. |
| **Ansparen-Kauf** | Kauf-Nutzerverhalten: Ein Ziel wird erst bei vollem Preis mit einer Investition „gekauft". Technisch gleich zum Schritt-für-Schritt-Kauf. |
| **Streak** | Anzahl aufeinanderfolgender Tage, an denen eine Gewohnheit erfüllt wurde. Darf brechen — **ohne** Strafe. |
| **Earmarking** | Optionale Regel, dass für ein Ziel nur Punkte aus bestimmten Gewohnheiten zählen. *(Später.)* |
| **Tier / Stufe** | Ein Ziel mit mehreren Preisstufen. Fortschritt zählt über Stufen hinweg weiter. *(Später.)* |
| **Kein-Bestrafungs-Prinzip** | Leitprinzip: ein nicht geschaffter Tag kostet keine Punkte und wirft den Ziel-Fortschritt nicht zurück. |
| **Geldbörsen-Modell** | Grundmodell: Punkte sind ausgebbares Guthaben. Punktestand wird berechnet. Siehe DECISIONS ADR-0002. |
| **Dogfooding** | Der Entwickler nutzt die eigene App im echten Alltag — bewusster Teil des Plans. |

> Technische Tabellennamen (z. B. `habits`, `habit_entries`, `goals`,
> `investments`) werden festgelegt, sobald das Datenmodell steht, und dann hier
> bzw. in [TECHNICAL_SPEC.md](TECHNICAL_SPEC.md) den Begriffen zugeordnet.
