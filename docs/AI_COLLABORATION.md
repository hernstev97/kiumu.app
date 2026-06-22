# KI-Zusammenarbeit & Prompting

> Wie KI in diesem Projekt eingesetzt wird — so, dass die Skills des Entwicklers
> **wachsen** statt verkümmern, und wie man sie für Entwicklung, Design und
> Dokumentation gut prompted. Wächst mit der Erfahrung; trag neue Erkenntnisse ein.

| | |
|---|---|
| **Letzte Aktualisierung** | 2026-06-22 |
| **Leitentscheidung** | [DECISIONS.md](DECISIONS.md) → ADR-0007 (KI im Lern-Modus) |

---

## 1. Das Grundprinzip: Lern-Modus statt Black Box

Das letzte Projekt entstand „mit heftiger KI-Unterstützung" → viel Ergebnis, wenig
bleibender Skill. Diesmal ist Verständnis das Ziel. Die Regel ist einfach:

> **Akzeptiere keinen Code, den du nicht erklären kannst.**
> Wenn du ihn nicht erklären kannst, verstehst du ihn nicht — dann lass ihn dir
> von der KI erklären, bis du es kannst.

Das ist nicht „weniger KI", sondern *gezieltere* KI.

## 2. Die Lern-Schleife (für Kernlogik & neue Konzepte)

1. **Erklären lassen, bevor gebaut wird.** Frag nach dem Ansatz und den
   Trade-offs, nicht direkt nach fertigem Code: „Erkläre mir 2 Wege, das zu lösen,
   mit Vor- und Nachteilen."
2. **Selbst tippen.** Schreib die Kernlogik selbst, auf Basis des Verstandenen.
   Das Tippen ist, wo das Lernen passiert.
3. **Gegenlesen lassen.** Lass die KI deinen Code reviewen: „Was ist hier fragil,
   unidiomatisch oder unsicher? Was würdest du anders machen und warum?"

## 3. Wann KI voll übernehmen darf — und wann nicht

| Lass KI es machen (Zeit sparen) | Lern-Modus (selbst verstehen) |
|---|---|
| Boilerplate, Projekt-Setup, Konfiguration | Die Punkte-/Geldbörsen-Logik |
| Wiederkehrendes Muster, das du schon kannst | Datenmodell & Beziehungen |
| Tipparbeit ohne neue Konzepte | Alles rund um Auth & Row Level Security |
| Formatierung, Umbenennungen | Jedes Konzept, das du noch nicht erklären kannst |

Faustregel: **Sicherheitskritisches** (Auth, RLS, Umgang mit Schlüsseln) immer
verstehen *und* gegenprüfen — hier ist „funktioniert scheinbar" besonders gefährlich.

## 4. Wofür KI in diesem Projekt nützlich ist

- **Gerüst & Setup:** Projekt aufsetzen, Konfigurationsdateien, Beispielcode.
- **Erklären:** Fehlermeldungen entschlüsseln, Konzepte auf dein Niveau erklären.
- **Code-Review:** zweites Paar Augen für Lesbarkeit, Sicherheit, Idiomatik.
- **Rubber-Ducking:** ein Problem laut durchdenken, Optionen abwägen.
- **Design:** Ideen und Varianten für UI/UX und Design-Sprache erkunden (siehe
  [DESIGN.md](DESIGN.md)). Wireframe-Ideen, Farb-/Typo-Vorschläge, Namen für Dinge.
- **Dokumentation:** Entwürfe für Doku, Commit-Nachrichten, ADR-Texte, README-Teile.
- **Tests:** Testideen und Randfälle vorschlagen.

## 5. Prompting — wie man bessere Ergebnisse bekommt

Kernidee: **Kontext + klares Ziel + gewünschtes Format.** Je weniger die KI raten
muss, desto besser.

**Immer mitgeben:**
- **Kontext:** Welcher Stack (TypeScript, Next.js, Supabase)? Welche Datei/Spec ist
  relevant? Häng die betreffende Datei oder das Datenmodell an, statt es zu umschreiben.
- **Was du schon versucht hast** und woran es scheitert (bei Fehlern: die echte
  Fehlermeldung mitschicken).
- **Das Ziel und die Grenzen:** „Es soll X tun, ohne Y; bleib bei unserem Stack."
- **Das gewünschte Format:** „Gib mir erst die Erklärung, dann den Code", „nur die
  geänderten Zeilen", „als nummerierte Schritte".

**Techniken, die zuverlässig helfen:**
- **Nach Erklärung *und* Alternativen fragen,** nicht nur nach einer Lösung:
  „Zeig mir 2 Ansätze mit Trade-offs."
- **Schritt-für-Schritt-Denken anfordern** bei kniffligen Dingen: „Überlege erst
  laut, dann antworte." (Hilft bei Logik- und Modellierungsfragen.)
- **Positive und negative Beispiele geben:** „So soll es aussehen … so *nicht* …"
- **Iterieren:** breit anfangen, dann verengen. Erste Antwort ist ein Entwurf, kein
  Endprodukt — nachfassen, präzisieren, korrigieren.
- **Auf die Doku zeigen:** „Halte dich an unsere AGENTS.md / unser Datenmodell."
- **Spezifische Struktur verlangen** (z. B. Antwort in bestimmten Abschnitten),
  wenn du die Form weiterverwenden willst.

**Lern-spezifische Prompts (für dieses Projekt besonders wertvoll):**
- „Erkläre mir das so, als käme ich nach einer Pause zurück und hätte X vergessen."
- „Was sollte ich verstehen, *bevor* ich das benutze?"
- „Frag mich ab: Stell mir 3 Fragen, ob ich das wirklich verstanden habe."

**Immer verifizieren:** KI kann selbstbewusst falsch liegen. Bei Fakten, Sicherheit
und allem, was du nicht einschätzen kannst, gegenprüfen — nicht blind übernehmen.

## 6. Eigene Prompt-Muster sammeln

Wenn ein Prompt gut funktioniert hat, notier ihn hier. Mit der Zeit entsteht eine
persönliche Sammlung wiederverwendbarer Muster.

- *(Noch leer — wird mit der Praxis gefüllt.)*

## 7. Weiterführend

- Anthropics Leitfaden zum Prompting:
  https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview
- Für agentisches Arbeiten direkt am Code liest Claude Code automatisch
  [CLAUDE.md](../CLAUDE.md) → [AGENTS.md](../AGENTS.md). Im Chat-Interface die
  relevanten Dokumente stattdessen anhängen.
