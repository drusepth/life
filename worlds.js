function make_2d_array(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = new Array();
    }
  }
  return arr;
}

function random_tile() {
  // todo sample available tiles
  return floor(random(2));
}

let grid;
let resolution = 25;
let SHOW_CELL_BORDERS = true;
let BACKGROUND_COLOR  = [0, 0, 0];

function setup() {
  createCanvas(600, 400);
  cols = width / resolution;
  rows = height / resolution;

  grid = make_2d_array(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j].push(random_tile());
    }
  }
}

function draw_cell(x, y, entity_id) {
  let entity_to_draw = id_to_entity_class(entity_id);
  if (entity_to_draw !== undefined) {
    fill(entity_to_draw.color);
    stroke(SHOW_CELL_BORDERS ? 0 : entity_to_draw.color);
    rect(x, y, resolution - 1, resolution - 1);
  }
}

function draw() {
  background(BACKGROUND_COLOR);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      let dominant_entity = grid[i][j][grid[i][j].length - 1];
      draw_cell(x, y, dominant_entity);
    }
  }

  update();
}

function update() {
  console.log('Updating');
  let next_state = make_2d_array(cols, rows);

  // For each cell, follow the rules!
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let neighboring_entities = get_neighbors(grid, i, j);
      let new_entity_list = Array();

      // For each existing entity on this cell, translate it based on its neighbors
      for (let e = 0; e < grid[i][j].length; e++) {
        let entity_class = id_to_entity_class(grid[i][j][e]);
        if (entity_class === undefined) {
          continue;
        }

        let new_entities = entity_class.tick(neighboring_entities);
        if (new_entities !== undefined) {
          if (!(new_entities.constructor == Array)) {
            // Convert single-entity responses to an array so we can map over any response for IDs.
            new_entities = [new_entities];
          }
          new_entity_list = new_entity_list.concat(new_entities.map(entity => entity.id));
        }
      }

      // For each entity type, see if it can be birthed on this cell
      let emerging_entities = all_entities();
      for (let e = 0; e < emerging_entities.length; e++) {
        let entity_class = emerging_entities[e];
        let birthed_entities = entity_class.birth(neighboring_entities);
        if (birthed_entities !== undefined) {
          if (!(birthed_entities.constructor == Array)) {
            // Convert single-entity responses to an array so we can map over any response for IDs.
            birthed_entities = [birthed_entities];
          }
          new_entity_list = new_entity_list.concat(birthed_entities.map(entity => entity.id));
        }
      }

      grid[i][j] = new_entity_list;
    }
  }
}

function get_neighbors(grid, x, y) {
  let neighbors = Array();
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (x + i != x || y + j != y) {
        let col = (x + i + cols) % cols;
        let row = (y + j + rows) % rows;

        neighbors = neighbors.concat(grid[col][row]);
      }
    }
  }
  return neighbors;
}
