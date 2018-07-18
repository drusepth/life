function id_to_entity_class(id) {
  switch (id) {
    case Void.id:         return Void;
    case Civilization.id: return Civilization;
    case Dirt.id:         return Dirt;
    case Water.id:        return Water;
    case Desert.id:       return Desert;
    case Forest.id:       return Forest;
  }
}

function all_entities() {
  return [Void, Civilization, Dirt];
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

  static tick(neighbors) {
    return Void;
  }

  static birth(neighbors) {
    return undefined;
  }
}

class Civilization {
  static get id() { return 1; }

  static get color() {
    return [255, 255, 255];
  }

  static tick(neighbors) {
    let civilization_neighbors = frequency(neighbors, Civilization.id);

    if (civilization_neighbors < 2) {
      // Die
      return undefined;
    }

    if (civilization_neighbors > 3) {
      // Die
      return undefined;
    }

    return Civilization;
  }

  static birth(neighbors)  {
    let civilization_neighbors = frequency(neighbors, Civilization.id);

    if (civilization_neighbors == 3) {
      return Civilization;
    }
  }
}

class Dirt {
  static get id() { return 2; }

  static get color() {
    return [139, 69, 19];
  }

  static tick(neighbors) {
    return Dirt;
  }

  static birth(neighbors) {
    return undefined;
  }
}

class Water {
    static get id() { return 3; }

    static get color() {
      return [0, 0, 255];
    }
}

class Desert {
    static get id() { return 4; }

    static get color() {
      return [255, 255, 0];
    }
}

class Forest {
    static get id() { return 5; }

    static get color() {
      return [0, 255, 0];
    }
}
