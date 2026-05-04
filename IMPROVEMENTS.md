# Deferred Improvements

Tracking ideas that were proposed but not implemented. Pick up any item independently — none depend on the others.

---

## v2 — UI improvements + AI opponent

The next iteration. Two themes; tackle in either order.

### A. AI opponent (player vs computer)

Current "solo AI" only removes the bottom-most leftover tile + token each turn so the deck depletes at a 2-player rate — it doesn't actually score. v2 adds a real opponent with its own environment that scores at the end.

**Open design questions to settle first:**

- **Turn order.** Real Cascadia is sequential (each player picks then places). Simplest: human plays a turn, AI then plays its own turn against the same market. Alternative: simultaneous picks from the same market (more elegant but harder to display).
- **AI's tile/token choice strategy.**
  - Tier 0: random pick from the four slots.
  - Tier 1: heuristic — score the resulting board after each candidate placement, pick the one that maximizes expected end-game score.
  - Tier 2: monte-carlo / minimax over remaining deck.
  - Recommend starting at Tier 0 to get the data plumbing right, then iterating on the heuristic.
- **Display of the AI's board.**
  - Option A: small overview thumbnail in a corner (always visible).
  - Option B: a "View opponent" toggle that swaps the main map area.
  - Option C: split-screen during play (probably too cramped on iPad).
  - Need a separate `mapData`, `mapRowsColumnsIndexes`, `mapStats`, `allPlacedTokens`, `allPlacedTiles` per player.
- **Difficulty levels.** Easy/Medium/Hard mapping to AI tier above? Selectable on the landing page.
- **Save schema.** Bump `SAVE_KEY` to `v2` and migrate (or coexist with `v1`). Save now needs both players' state.

**Code areas that need to become per-player:**

- `mapData`, `mapRowsColumnsIndexes`, `mapStats`, `mapMoveAmount` (the active map-pan / zoom state can stay singleton — it's a viewing concern)
- `allPlacedTokens`, `allPlacedTiles`, `habitatMatches` (computed at end-game — needs to run for both players)
- `tokenScoring` (per-player wildlife totals)
- `natureCubesNum` (each player has their own count)
- All the `calculate*TokenScoring()` functions need a `player` argument or to operate against passed-in state instead of globals.
- End-game UI needs to compare two scoring panels side-by-side.

**Suggested first step:** refactor so the existing solo logic operates against an explicit `player` object (`{ mapData, allPlacedTokens, ... }`) rather than module-level globals. That makes adding a second player a matter of constructing a second object, not a rewrite.

### B. UI improvements

Loose list to refine before starting:

- **Settings/options panel.** A gear icon → AI difficulty, animation toggles, board size? Currently no settings UI exists.
- **In-game score preview.** Show the current running score (or per-animal score) as the player builds — Cascadia is hard to gauge mid-game without it. Optional toggle.
- **Polish placement animations.** Tile-rotation preview before commit feels stilted; could smooth the rotation.
- **Mobile (≤599px) re-do.** v1 only seriously polished iPad + desktop. Phones still use the old wooden-arrow nav and have layout quirks.
- **Keyboard shortcuts modal refresh.** Static image (`img/keyboard-keys-move.png`) — rebuild as a real key-cap UI so it matches actual key bindings.
- **Tutorial / first-run.** Right now you start cold. A brief overlay walking through tile picking, token placement, nature tokens, scoring would help new players.
- **Score history.** Persist past scores (with chosen decks) to localStorage so you can see "best score for this deck combination" — also unlocks the official "Beat Your Best" solo variant (see Other notes below).

---

## Map navigation: free pixel-pan (Option B)

**Status:** Not implemented. Current state is "Option A" — drag triggers stepped `processMapMovement` calls every ~55px (`js/scripts.js`, search for `setupMapDrag`).

**What changes:** Drag updates `#mapHiddenOverlay`'s `left`/`top` continuously, pixel-by-pixel, instead of jumping in tile-sized steps. Smoother, feels more like a modern map app.

**Where the friction is:**
- The existing limit math in `checkIfMapLimitReached` (`js/scripts.js:555`) is expressed in tile-step units (`mapStats.directionStatus`, `mapStats.tileExtremes`, `mapLimits`). Free pan needs the same limits in pixel units.
- Pixel limits depend on `zoomLevel`, `mapMoveAmount.view[currentView].incs.{horizontal,vertical}`, and the current visible window. The translation is `pixels = tileSteps * incs * (zoomLevel / 10)` (see `updateMapPosition` at `js/scripts.js:607`).
- `mapMoveAmount.tilePos.{top,left}` is persisted to localStorage (`saveGameState`, `js/scripts.js:247`). If you switch to pixel offsets, either continue rounding to the nearest tile-step on save (compatible with current saves) or bump the save schema (`SAVE_KEY = 'cascadia.gameState.v1'` → `v2`) and migrate.

**Suggested approach:**
1. Compute `minLeftPx`, `maxLeftPx`, `minTopPx`, `maxTopPx` once per zoom change. Cache them.
2. In the drag handler, replace `consumeDelta` with a function that mutates an internal pixel offset and writes it directly to `#mapHiddenOverlay` style.
3. Clamp to the cached pixel limits.
4. On `mouseup`/`touchend`, optionally animate-snap to the nearest valid tile-step (set `mapMoveAmount.tilePos` to the rounded value, call `updateMapPosition`).
5. Keep the keyboard handler (`js/scripts.js:499`) as-is — it can keep using `processMapMovement`, since it operates on the same underlying state.

**Rough size:** ~120 lines, mostly limit-math.

---

## Pinch-to-zoom and modern zoom controls (Option C)

**Status:** Not implemented. Zoom is currently the corner `+`/`-` buttons (`.zoomOptions` in `index.html`, handled by `setZoom` in `js/scripts.js:794`).

**What changes:**
- iPad: pinch-to-zoom on the map.
- Desktop: `Ctrl + mouse wheel` (or trackpad pinch) zooms.
- Either supplement or replace the corner buttons.

**Where the friction is:**
- `zoomLevel` is currently a discrete enum: `6`, `8`, `10`. Free pinch wants a continuous value, then snaps. Either:
  - **Continuous mode:** rework `setZoom` to accept arbitrary multipliers. Touches `transform: scale()` calls and the `xTilesVisible`/`yTilesVisible` lookups in `mapStats.zoomStats[zoomLevel]`.
  - **Snap mode:** track pinch ratio during the gesture, snap to the nearest discrete level on release. Less invasive — keeps `mapStats.zoomStats` working as-is.
- The pinch handler shares the touch event pipeline with the two-finger pan added in Option A. They have to coexist: e.g., decide pan vs zoom by whichever delta dominates (Δdistance vs Δmidpoint), or always do both simultaneously (zoom around midpoint while panning).
- Trackpad pinch on macOS arrives as `wheel` events with `ctrlKey: true` — same listener as Ctrl+wheel.

**Suggested approach (snap mode, minimal):**
1. In `touchstart` with `e.touches.length === 2`, record initial finger distance.
2. In `touchmove`, compute current distance; ratio = current / initial. If ratio crosses a threshold (e.g., 1.25 to zoom in, 0.8 to zoom out), call `setZoom` to step up/down and reset the initial distance.
3. On desktop, listen for `wheel` events on `#mapContainer` and call `setZoom` step on `Ctrl+wheel` deltas.
4. Optionally hide the `.zoomOptions` corner buttons or keep them as a fallback.

**Rough size:** ~80 lines for snap mode, ~200 for continuous.

---

## Other notes worth keeping

### `setupTiles` count vs CLAUDE.md
`CLAUDE.md` says `setupTiles(46)` but `js/scripts.js:355` calls `setupTiles(43)`. The 43 figure matches the 2-player Cascadia rulebook (which the solo variant follows). Either fix the doc or revisit if a 46-tile variant is desired.

### Habitat bonus is homebrew, not the printed solo rule
`calculateHabitatScoring` (`js/scripts.js:3888`) awards `+2` when a corridor exceeds 6 tiles — a fixed threshold, not the official Cascadia rule. The printed multiplayer rule is "longest corridor wins +2 (or +1 each on tie)"; the official "Beat Your Best" solo variant compares against the player's own historical best. To match the official solo variant, persist per-terrain best `largestSet` values in `localStorage` and award +2 when the current run beats (or equals) the saved best.

