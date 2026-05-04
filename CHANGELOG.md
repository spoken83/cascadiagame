# Changelog

## v1.0.0 — Solo mode, complete (2026-05-05)

First polished release. Solo Cascadia plays end-to-end on desktop and iPad
at `cascadia.gordonfrois.com`. Forked from the upstream
`cascadiagame/cascadiagame.github.io`.

### Scoring

- Wildlife scoring B/C/D variants implemented and play-tested across all
  five animals (Bear, Elk, Fox, Hawk, Salmon) — `calculate*TokenScoring`
  switches on the per-game `selectedDecks` letter.
- Hawk Network/Connected line of sight only blocked by other hawks
  (matches the official rule; non-hawk animals are see-through).
- Habitat bonus is currently a homebrew "≥7 tiles in a corridor → +2"
  threshold rather than the multiplayer "longest corridor wins" or the
  official "Beat Your Best" solo variant — flagged in `IMPROVEMENTS.md`.

### Market mechanics

- Tile/token market refills **in place**: each of the four slots is a
  fixed position. Whatever the player and solo AI leave behind stays
  exactly where it was; only the missing tiles/tokens get replaced with
  a fade-in. Preserves tile-token pairings under nature-token use.
- Wildlife token reshuffle paths (4-dup auto, 3-dup optional, nature-clear)
  push rejected tokens back into the bag and re-shuffle, matching the
  physical cloth-bag mechanics.

### Artwork & layout

- New scoring card art (`CD_<Animal>-<Deck>-(mini|full).png`) wired
  through every surface. Helper `scoringCardImg(w, letter, variant)`
  picks `mini` for in-game contexts and `full` for the landing page,
  per-animal end-game panel, and the deck reference page.
- iPad layout: in-game button row aligned to the map width, smaller
  Cascadia logo, turn/nature counter as a top-right pill overlay on
  the map (greyed pinecone icon when 0).
- Landing-page selected-deck cards have uniform heights via fixed
  `aspect-ratio` + `object-fit: contain`.
- End-of-game scoring strip resized for the new card aspect; old
  image-based highlight frames replaced with a CSS outline.
- Per-animal end-game panel uses the `full` card art at 380px height.
- "View all scoring decks" opens an in-app drawer iframing
  `scoring.html` (X / backdrop / Escape to close) instead of opening a
  new tab.
- "New Game" button on the end-of-game page returns to the landing.

### Map navigation

- Wooden arrow circle gone. Drag-to-pan: mouse-drag on desktop,
  two-finger drag on iPad. Each ~55px of movement triggers one stepped
  `processMapMovement` call. Movement under 6px passes through as a
  click so tile placement still works. Trailing click after a drag is
  suppressed so you don't accidentally place a tile on the cell you
  released over.

### Persistence

- Auto-save to `localStorage` after each turn, duplicate-token
  replacement, and nature-token actions; auto-resume on reload via
  `restoreGameState()`. Save is cleared on game over and on "New Game".

### Deployment

- `spoken83/cascadiagame` is the live fork. Cloudflare Pages project
  `cascadia` (no Git auto-deploy yet) — deployed via
  `wrangler pages deploy`. Bumped `http.postBuffer` once locally to
  accommodate the ~12 MB binary push.
- `.gitignore` covers `.DS_Store`, `.claude/`, the rules PDF, sample
  JPGs, archive folder, starting-pieces folder, and `.wrangler/`.
