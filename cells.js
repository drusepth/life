function id_to_entity_class(id) {
  switch (id) {
    case Void.id:         return Void;
    case Civilization.id: return Civilization;
    case Dirt.id:         return Dirt;
    case Water.id:        return Water;
    case Desert.id:       return Desert;
    case Forest.id:       return Forest;
    case Town.id:         return Town;
  }
}

function all_entities() {
  return [Void, Civilization, Dirt, Water, Forest, Desert, Town];
}

function landmass_entities() {
  return [Dirt, Desert, Forest];
}

function life_entities() {
  return [Void, Civilization];
}

function initial_world_entities() {
  return [Dirt, Water];
}

function frequency(array, element) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      count++;
    }
  }
  return count;
}

class Void {
  static get id() { return 0; }

  static get color() {
    return [0, 0, 0];
  }

  static tick(current_entities, neighbors) {
    // If there is anything else on this cell, we should remove the void.
    if (neighbors.length > 0) {
      return undefined;
    }

    return Void;
  }

  static birth(current_entities, neighbors) {
    if (current_entities.length == 0) {
      return Void;
    }

    return undefined;
  }
}

class Civilization {
  static get id() { return 1; }

  static get color() {
    return [255, 255, 255];
  }

  static tick(current_entities, neighbors) {
    let civilization_neighbors = frequency(neighbors, Civilization.id);
    let desert_neighbors       = frequency(neighbors, Desert.id);

    if (civilization_neighbors < 2) {
      // Die
      return undefined;
    }

    if (civilization_neighbors > 3) {
      // Die
      return undefined;
    }

    if (frequency(current_entities, Water.id) > 0) {
      // Die
      return undefined;
    }

    if (desert_neighbors > 3) {
      return undefined;
    }

    return Civilization;
  }

  static birth(current_entities, neighbors)  {
    let civilization_neighbors = frequency(neighbors, Civilization.id);
    if (civilization_neighbors == 3 && frequency(current_entities, Water.id) == 0) {
      return Civilization;
    }
  }
}

class Dirt {
  static get id() { return 2; }

  static get color() {
    return [139, 69, 19];
  }

  static tick(current_entities, neighbors) {
    let dirt_neighbors   = frequency(neighbors, Dirt.id);
    let water_neighbors  = frequency(neighbors, Water.id);
    let forest_neighbors = frequency(neighbors, Forest.id);
    let desert_neighbors = frequency(neighbors, Desert.id);
    let town_neighbors   = frequency(neighbors, Town.id);

    if (town_neighbors > 0) {
      return Dirt;
    }

    if (dirt_neighbors > 1 && water_neighbors > 0) {
      return Forest;
    }

    if (forest_neighbors > 5) {
      return Forest;
    }

    if (dirt_neighbors > 6) {
      return Desert;
    }

    if (water_neighbors > 5) {
      return Water;
    }

    if (desert_neighbors > 6) {
      return Desert;
    }

    return Dirt;
  }

  static birth(current_entities, neighbors) {
    return undefined;
  }
}

class Water {
  static get id() { return 3; }

  static get color() {
    return [0, 0, 255];
  }

  static tick(current_entities, neighbors) {
    let water_neighbors  = frequency(neighbors, Water.id);

    if (water_neighbors < 3) {
      return Dirt;
    }

    return Water;
  }

  static birth(current_entities, neighbors) {
    if (frequency(neighbors, Water.id) > 6 && frequency(current_entities, Water.id) == 0) {
      return Water;
    }
  }
}

class Desert {
  static get id() { return 4; }

  static get color() {
    return [255, 255, 0];
  }

  static tick(current_entities, neighbors) {
    let civilization_neighbors = frequency(neighbors, Civilization.id);
    let water_neighbors        = frequency(neighbors, Water.id);
    let forest_neighbors       = frequency(neighbors, Forest.id);
    let dirt_neighbors         = frequency(neighbors, Dirt.id);

    if (water_neighbors > 0) {
      return Dirt;
    }

    if (civilization_neighbors > 3) {
      return Dirt;
    }

    if (forest_neighbors > 1) {
      return Dirt;
    }

    if (dirt_neighbors > 6) {
      return Dirt;
    }

    return Desert;
  }

  static birth(current_entities, neighbors) {
    return undefined;
  }
}

class Forest {
  static get id() { return 5; }

  static get color() {
    return [0, 255, 0];
  }

  static tick(current_entities, neighbors) {
    let desert_neighbors       = frequency(neighbors, Desert.id);
    let forest_neighbors       = frequency(neighbors, Forest.id);
    let civilization_neighbors = frequency(neighbors, Civilization.id);
    let water_neighbors        = frequency(neighbors, Water.id);
    let town_neighbors         = frequency(neighbors, Town.id);

    if (desert_neighbors > 1) {
      return Dirt;
    }

    if (forest_neighbors == 0) {
      return Dirt;
    }

    if (water_neighbors > 5) {
      return Water;
    }

    if (civilization_neighbors > 2) {
      return Dirt;
    }

    if (town_neighbors > 0) {
      return Dirt;
    }

    if (frequency(current_entities, Town.id) > 0) {
      return undefined;
    }

    return Forest;
  }

  static birth(current_entities, neighbors) {
    return undefined;
  }
}

class Town {
  static get id() { return 6; }

  static get color() {
    return [192, 192, 192];
  }

  static tick(current_entities, neighbors) {
    let desert_neighbors   = frequency(neighbors, Desert.id);
    let town_neighbors     = frequency(neighbors, Town.id);
    let forest_neighbors   = frequency(neighbors, Forest.id);

    if (desert_neighbors > 5) {
      return undefined;
    }

    if (town_neighbors > 0) {
      return undefined;
    }

    if (forest_neighbors > 7) {
      return undefined;
    }

    if (frequency(current_entities, Water.id) > 0) {
      return undefined;
    }

    return Town;
  }

  static birth(current_entities, neighbors) {
    let civilization_neighbors = frequency(neighbors, Civilization.id);

    if (civilization_neighbors > 5) {
      return Town;
    }
  }
}
