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
  return floor(random(5));
}

let grid;
let resolution = 25;
let SHOW_CELL_BORDERS = true;

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

function draw_cell(x, y, entity) {
  if (entity == Civilization.id) {
    fill(Civilization.color);
    stroke(SHOW_CELL_BORDERS ? 0 : Civilization.color);
    rect(x, y, resolution - 1, resolution - 1);
  } else if (entity == Dirt.id) {
    fill(Dirt.color);
    stroke(SHOW_CELL_BORDERS ? 0 : Dirt.color);
    rect(x, y, resolution - 1, resolution - 1);
  } else if (entity == Water.id) {
    fill(Water.color);
    stroke(SHOW_CELL_BORDERS ? 0 : Water.color);
    rect(x, y, resolution - 1, resolution - 1);
  } else if (entity == Desert.id) {
    fill(Desert.color);
    stroke(SHOW_CELL_BORDERS ? 0 : Desert.color);
    rect(x, y, resolution - 1, resolution - 1);
  } else if (entity == Forest.id) {
    fill(Forest.color);
    stroke(SHOW_CELL_BORDERS ? 0 : Forest.color);
    rect(x, y, resolution - 1, resolution - 1);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      let dominant_entity = grid[i][j][grid[i][j].length - 1];
      draw_cell(x, y, dominant_entity);
    }
  }
}

function update() {
  let next_state = make_2d_array(cols, rows);

  // For each cell, follow the rules!
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // For each entitiy on this cell, translate it
      for (let e = 0; e < grid[i][j].length; e++) {

      }
    }
  }
}
