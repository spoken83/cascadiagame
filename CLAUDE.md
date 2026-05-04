# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A browser implementation of the **Cascadia** board game (Randy Flynn). Single-player only — the human plays alone against the scoring objectives. Deployed as a static GitHub Pages site at `cascadiagame.github.io`.

There is no build system, no package manager, no tests, no linter, no framework. The entire app is hand-written HTML + jQuery + Bulma CSS, served as static files.

## Running locally

Any static file server from the repo root works. For example:

```
python3 -m http.server 8000   # then open http://localhost:8000
```

Opening `index.html` directly via `file://` also works for most things, but a server is recommended (some browsers restrict `fetch`/asset behavior over `file://`).

There are no commands to "build", "lint", or "test" — changes are tested by reloading the page in a browser.

## High-level architecture

### File layout

- `index.html` — **all** DOM is pre-rendered here, including every modal and both desktop/mobile variants of the scoring panels. Layers (`#setupLayer`, `#gameLayer`, `#goalsLayer`) are toggled via classes; modals open via Bulma's `.is-active` pattern. External deps (jQuery 3.2.1, Bulma 0.8, bulma-extensions, ionicons) are loaded from CDNs.
- `js/data.js` — pure data. `startingTiles` is 5 sets of 3 keystone tiles (one is chosen at random to seed the map); `tiles` is the ~85-tile draw deck; `tokenNums` controls how many of each wildlife token enter the bag (20 each by default).
- `js/scripts.js` — ~4600 lines containing **all** game logic, event wiring, and end-of-game scoring. Organized by feature, not by module — search by function name.
- `js/image-preloader.js` — warms the browser's image cache by `new Image()`-ing every asset. Update this list when adding new images.
- `css/styles.css` — ~5300 lines of hand-written CSS. Uses the `.layer`, `.modal`, and Bulma button conventions established in `index.html`.

### Game state

All state is module-level `var`s at the top of `scripts.js`:

- `mapData` — the 2D source-of-truth grid for what's on each hex (rows ~10–30, cols ~10–30). Each cell: `{row, column, placedTile, habitats[], wildlife[], placedToken, rotation}`. The DOM is regenerated from this by `generateMap()`.
- `mapRowsColumnsIndexes` — lookup table mapping a row/column number to the cell's `mapData` index (the array is offset, not 1:1 with row numbers).
- `allTiles` / `allTokens` — the shuffled draw piles. `initialTiles` / `initialTokens` are the 4-tile/4-token "market" the player draws from each turn. `displayedTokens` mirrors what's currently visible.
- `mapStats` — pan position, zoom level (`6`/`8`/`10`), per-direction lock state to clamp panning.
- `currentChosenWildlife`, `natureCubesNum`, `turnsLeft`, `currentView` — current-turn / global toggles.
- `allPlacedTiles` / `allPlacedTokens` / `habitatMatches` / `tokenScoring` — populated only at end-of-game by `processPlacedTilesAndTokens()`; do not read these mid-game.

### Lifecycle

1. **Page load** — `$(document).ready` calls `setupTiles(46)` (deck-size cap), `setupTokens()`, and `updateNextTurn('setup')`.
2. **Start Game** — clicking `#startGame` (or `#commenceGame` on tablet/mobile, swapped by `checkScreenWidth`) builds the empty hex grid via `initiateMap()` → `loadStartingTileDetails()` → `generateMap()`, then primes the market via `setupInitialTokensAndTiles()`.
3. **Each turn** — player picks a tile/token pair; `confirmTilePlacement()` places the tile, then `activateTokenPlacement('normalToken')` resolves the token. `pickNewTilesTokens()` refills the market, `checkDuplicateTokens()` enforces the 4-duplicates-auto-reshuffle and 3-duplicates-optional-reshuffle rules. `updateNextTurn('nextTurn')` decrements `turnsLeft`.
4. **Nature tokens** — branch through `#natureCubesModal` into one of four sub-modes (pick-any, clear-any-number, clear-some, clear-all); each has its own confirm/cancel flow that mirrors the standard one but uses `.potentialNatureCube*` classes.
5. **Game end** — `endOfGameNotification()` fires after the last turn; `endOfGameSetup()` swaps to the scoring layer and `setupFinalScoring()` runs `calculateBearTokenScoring`, `calculateElkTokenScoring`, `calculateFoxTokenScoring`, `calculateHawkTokenScoring`, `calculateSalmonTokenScoring`, plus `calculateHabitatScoring`.

### Event handling

Almost every interaction is `$(document).on(touchEvent, '<selector>', …)` where `touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click'`. This is the canonical pattern — match it when adding new handlers so behavior is consistent across desktop and touch. `lockMap` and `lockFunction` are debounce flags used to swallow rapid repeats (notably for keyboard navigation in `$(document).keydown`).

### Hex / map model

Tiles are flat-top hexes laid out on an offset coordinate system. Rotation is in 60° increments. Neighbour lookup is split by row parity (`row % 2`) — see `neighbourTileIDs()` and `linkedTileSides`. When a tile has two habitats, its 6 sides are computed in `processPlacedTilesAndTokens()` by walking around from index 0 with `numTurns = findRotationIndex(rotation)`. End-of-game habitat scoring depends on this side-by-side matching; if you change rotation handling, re-verify `processPlacedTilesAndTokens` and `findRotationIndex`.

### Responsive views

There are three views — `desktop` (>1205px), `tablet` (≤1205px), `mobile` (≤599px) — switched by `checkScreenWidth()`. Several pieces of UI (titles, scoring goals, button bars) are duplicated in `index.html` with mobile-/tablet-specific IDs and toggled via the `hideWhenShowingGoalsMobile` / `hideWhenShowingGoalsTablet` classes. When changing a control, search for both desktop and mobile variants — they often have separate handlers (e.g. `#gameInstructionsButton` vs `#mobileGameInstructionsButton`).

### Keyboard controls (desktop)

WASD or arrow keys = pan map; Q / E = rotate the currently-placed-but-unconfirmed tile. Wired in the `$(document).keydown` block near the top of `scripts.js`.

## Conventions / gotchas

- `tiles` in `data.js` is mutated in-place by `shuffle()` inside `setupTiles`. A page reload restarts everything.
- jQuery selectors are the only DOM API used — no `document.querySelector`. Stick to jQuery to match style.
- Bulma classes (`.button is-success`, `.modal`, `.is-active`, `.notification`) are load-bearing; don't replace them with custom classes without updating `styles.css`.
- Do not introduce a build step, transpiler, or module system without an explicit ask — the deploy target is plain GitHub Pages serving these files as-is.
- When adding images, also add the path to `js/image-preloader.js` so the asset is preloaded.
- `setupGoalTileThumbnails()` exists but is currently a no-op stub — the goal thumbnails are statically authored in `index.html`.
