# CLAUDE.md

@AGENTS.md

<!--
  Diese Datei ist bewusst minimal.

  AGENTS.md ist die einzige Quelle der Wahrheit für Agenten-Anweisungen und wird
  von allen gängigen KI-Tools gelesen. Claude Code liest diese CLAUDE.md und zieht
  über die Zeile `@AGENTS.md` den gemeinsamen Inhalt automatisch mit ein. So gibt
  es nur EINE Datei zu pflegen (AGENTS.md), von der alle Tools profitieren.

  Hintergrund/Entscheidung: docs/DECISIONS.md → ADR-0008.

  Alternative zum @-Import wäre ein Symlink (`ln -s AGENTS.md CLAUDE.md`). Der
  Import-Weg ist hier bevorzugt, weil er erlaubt, unten Claude-spezifische Zeilen
  zu ergänzen, und weil Symlinks auf manchen Systemen (z. B. Windows-Checkouts)
  nicht zuverlässig erhalten bleiben.
-->

## Claude-spezifische Hinweise

- (Noch keine. Hier kommen ausschließlich Dinge rein, die NUR für Claude Code
  gelten und bewusst von AGENTS.md abweichen. Alles Allgemeine gehört in AGENTS.md.)
