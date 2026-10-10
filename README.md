---
provenance: AAC
layer: L2
---

# DexFolio

Layer: **L2**, DexFolio. Pre-1.0 prototype.

A folio is a read-only, single-file HTML view of a `dex-vault`: notes, spine node map, story, actions, ledger, sources, timeline, decisions and health checks. This repo is the source of truth for its builders and template.

## What dex.md uses it for

dex-md vendors the files in `src/` at a pinned dexfolio tag (see `RELEASE.md`) and installs them into `dex-vault/.dex/` at Stage 2. Vendored copies must be byte-identical to the tag.

## Use

```
node dex-vault/.dex/build_folio.mjs            # build dex-vault/dex-folio.html and take a snapshot
node dex-vault/.dex/build_folio.mjs --changes  # list changes since the last snapshot
```
Python alternative: `build_folio.py` (same behaviour). Node 18+, no packages.

Test: `npm test`.

## Licence

OpenCore: Core edition AGPL-3.0; no Enterprise edition exists.
