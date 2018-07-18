class Civilization {
  static get id() { return 0; }

  static get color() {
    return [255, 255, 255];
  }
}

class Dirt {
    static get id() { return 1; }

    static get color() {
      return [139, 69, 19];
    }
}

class Water {
    static get id() { return 2; }

    static get color() {
      return [0, 0, 255];
    }
}

class Desert {
    static get id() { return 3; }

    static get color() {
      return [255, 255, 0];
    }
}

class Forest {
    static get id() { return 4; }

    static get color() {
      return [0, 255, 0];
    }
}
