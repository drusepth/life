function x_index_from_coordinate(x) {
  return floor(x / resolution);
}

function y_index_from_coordinate(y) {
  return floor(y / resolution);
}

function unique(array) {
  return array.sort().filter(function(value, index, array) {
    return (index === 0) || (value !== array[index-1]);
  });
}
