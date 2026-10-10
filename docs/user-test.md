---
provenance: AAC
---

# Emulated user test

An agent emulated a person using DexFolio. **All answers are simulated test data** ([SIMULATED], dex.md rule 19). Nothing here was said by a real person and no node was verified. The matter is an illustrative "Maple Street Community Garden" plan with no real people or personal data.

## Setup

1. A sandbox folder with a two-file project (README.md, notes.txt).
2. dex.md copied in from dex-md; `git clone --depth 1 --branch v0.9.2` of dex-md into `dex-vault/.dex/dex-md`, then `engine/install.mjs` (11 files installed).
3. `vault.mjs scaffold --title "Maple Street Community Garden"` (114 node folders). A hand-written `00_index.md`, `01_matter/slant.md` and `08_story.md` were added, since the tool does not write them (see findings).
4. Baseline `vault.mjs checkpoint`, `fold`, `build_folio.mjs`.

## Rounds

Each round: answer nodes in their `contextual.md` (state `C`, tag `MODEL`, answer prefixed `[SIMULATED]`, Owner's words left `-`), `checkpoint --skill dex-grill`, `fold`, `check`, rebuild the folio, screenshot with headless Edge driven over the DevTools Protocol.

| Round | Nodes answered | Total covered | Coverage (checkpoint tool) |
|---|---|---|---|
| 0 baseline | 0 | 0 | 0% |
| 1 | 5 (L1 P01-P05) | 5 | 4.39% |
| 2 | 7 (L1 P06-P08, va; L2 P01-P03) | 12 | 10.53% |
| 3 | 9 (L3 P01-P04, L4 P01-P03, L2 va, L1 E01) | 21 | 18.42% |
| 4 | 10 (L5, L6, L1 E02, E05, hu, llm) | 31 | 27.19% |

The `vault.mjs check` passed after every round.

## What worked

- The folio built and rendered every round; coverage, layer bars, spine dots, timeline and "Last run" updated with each rebuild.
- Opening a node (via the command palette) shows its answer, tags and "not checked by a human".
- Simulated answers stayed visibly labelled everywhere they appear.
- Checks view reported "All clear".

## Rough edges found

Honest list from this one session; none stopped the test.

1. **Coverage differs by view.** The checkpoint tool says 27.19% (31 of 114 incl. MVE); the folio headline says 28% (27 covered, MVE counted separately as 4/18).
2. **Answering does not clear the question.** Writing an answer leaves `next: SK-GRILL ...` and the "Open questions" list in the node, so the folio still shows the old Next cell until an agent clears it by hand. Neither `vault.mjs` nor the folio does this.
3. **`--now` is ignored by the change log.** Checkpoint dates for the story and run log follow `--now`, but `06_journal/changes.md` stamped every change with the real date.
4. **Scaffold leaves the folio sparse.** It writes no `00_index.md`, slant or story, so a first folio shows "Matter of Fact", "Slant not set" and no story until they are written.
5. **Panel carries across views.** A node panel opened on the Spine stays open over Actions unless closed.
6. **Story drop cap.** A story starting with `[SIMULATED]` renders the drop cap as a lone `[`.
7. **No way to answer inside the folio.** Answers are written to node files by an agent or person; the folio's Decide buttons queue notes to `07_inbox/` but do not take an answer. That is by design (read-only), but a person expecting to type a reply there will not find it.

## Method note

Screenshots were taken at 1440x900 and colour-reduced to keep each PNG under 250 KB. The sandbox itself is not committed.
