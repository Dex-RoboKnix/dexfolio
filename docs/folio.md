---
provenance: AAC
layer: L2
---

# What the Folio shows

Read only. It never writes to the vault. It looks like a dark mode Mac app and opens as a knowledge base first. The visual views sit in the tabs at the top.

- **Notes (opens first):** the vault as a knowledge base: sidebar with search, favourites and every folder and note; the note with its front matter as properties and its body; clickable wiki links and `[C001]` style IDs; a right panel with spine preview, outline, backlinks and mentions. Back and forward with `[` and `]`. **Source** shows raw markdown.
- **Pictures in notes:** `![caption](path)` or `![[file.png]]` shows a picture from the folder that holds dex.md when the Folio sits in its vault; a placeholder shows elsewhere. Web images are never loaded.
- **Spine:** DEXSPINE as a node map, six layers L1 to L6, each with eight Plan points, three MVE nodes, eight Execute points. Click a node for its entry, sources, claims. `O` folds into an orbit view.
- **Story:** the story typeset for reading, with claim footnotes; read aloud uses the computer's voices.
- **Actions, Ledger, Sources**, plus **Media** when `02_sources/media.md` exists.
- **Timeline:** scrub through dated sources, journal entries and runs.
- **Decisions:** verify, dispute, prioritise or defer; export as markdown for `dex-vault/07_inbox/`. A decision needs the person's name.
- **Copy prompt**, **Checks** (blank entries, missing rows, broken IDs, unverified-as-verified), **Command palette** (Cmd/Ctrl+K), **Link folder** for a live view.

## Human steps

1. Run the build command from the README.
2. Open `dex-vault/dex-folio.html` in a browser.
3. Rebuild after every vault change; never edit the HTML.
