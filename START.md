---
provenance: AAC
layer: L2
---

# START (for an LLM)

1. Read `README.md`, then `docs/folio.md`.
2. Do not edit `src/` casually: dex-md pins these bytes. Any change needs a new tag and a new sha256 in `RELEASE.md`.
3. Run `npm test` before committing.
4. A folio never writes to the vault. Never hand-edit a built `dex-folio.html`; rebuild.
5. Human authority (Layer 8) overrides everything here.
