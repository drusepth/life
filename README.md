# Entity logic

## Civilization (white tiles) [0]
- Any civilization cell with fewer than two civilization neighbors dies, as if caused by underpopulation.
- Any civilization cell with greater than three civilization neighbors dies, as if caused by overpopulation.
- Any dirt cell with three civilization neighbors becomes a civilization cell, as if by reproduction.

## Dirt (brown tiles) [1]
- Any dirt cell with at least 6 dirt neighbors becomes a desert cell.
- Any dirt cell with at least 3 dirt neighbors and at least 1 water neighbor becomes a forest cell.
- Any dirt cell with at least 3 forest neighbors becomes a forest cell.

## Water (blue tiles) [2]
- Any water cell with no water neighbors becomes a dirt cell.
- Any non-water cell with more than 3 water neighbors becomes a water cell.
  - This removes all other entities from the cell.

## Desert (yellow tiles) [3]
- Any desert cell with at least 4 water neighbors becomes a dirt cell.

## Forest (green tiles) [4]
- Any forest cell with at least 2 desert neighbors becomes a desert cell.

## Overlapping tiles
- Each tile on the world contains an array of entities on it (e.g. civilization, dirt, water, etc).
- The color of the tile shown is the most-recently-added entity on that tile.
