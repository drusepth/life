# Entity logic

## Void (black tiles) [0]
- Present whenever no other entities exist on a tile.

## Civilization (white tiles) [1]
- Any civilization cell with fewer than two civilization neighbors dies, as if caused by underpopulation.
- Any civilization cell with greater than three civilization neighbors dies, as if caused by overpopulation.
- Any civilization on the same tile as water dies, by drowning.
- Any civilization with greater than 3 desert neighbors dies, as if caused by lack of resources.
- Any non-water cell with three civilization neighbors becomes a civilization cell, as if by reproduction.

## Dirt (brown tiles) [2]
- Ant dirt cell with at least 1 town neighbor will always remain a dirt cell.
- Any dirt cell with greater than 1 dirt neighbor and at least 1 water neighbor becomes a forest cell.
- Any dirt cell with greater than 5 forest neighbors becomes a forest cell.
- Any dirt cell with greater than 6 dirt neighbors becomes a desert cell.
- Any dirt cell with greater than 5 water neighbors becomes a water cell.
- Any dirt cell with greater than 6 desert neighbors becomes a desert cell.

## Water (blue tiles) [3]
- Any water cell with less than 3 water neighbors becomes a dirt cell.
- Any cell with greater than 6 water neighbors becomes a water cell.

## Desert (yellow tiles) [4]
- Any desert cell with at least 1 water neighbor becomes a dirt cell.
- Any desert cell with greater than 3 civilization neighbors becomes a dirt cell.
- Any desert cell with greater than 1 forest neighbor becomes a dirt cell.
- Any desert cell with greater than 6 dirt neighbors becomes a dirt cell.

## Forest (dark green tiles) [5]
- Any forest cell with greater than 1 desert neighbor becomes a dirt cell.
- Any forest cell with no forest neighbors becomes a dirt cell.
- Any forest cell with at least 5 water cells becomes a water cell.
- Any forest cell with greater than 2 civilization neighbors becomes a dirt cell.
- Any forest cell with at least 1 town neighbor becomes a dirt cell.
- Any forest cell on the same tile as a town dies.

## Town (silver tiles) [6]
- Any town with greater than 5 desert neighbors dies.
- Any town with any neighboring towns dies.
- Any town with at least 7 forest neighbors dies.
- Any town on the same tile as water dies.


## Overlapping tiles
- Each tile on the world contains an array of entities on it (e.g. civilization, dirt, water, etc). These entities all mutually exist on the same cell.
- The color of the tile shown is the most-recently-added entity on that tile.
