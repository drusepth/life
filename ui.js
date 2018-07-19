setTimeout(function() {
  let canvas             = document.getElementById('defaultCanvas0'),
      canvas_left_offset = canvas.offsetLeft,
      canvas_top_offset  = canvas.offsetTop,
      context            = canvas.getContext('2d');

  canvas.addEventListener('mousemove', function(event) {
    let x = x_index_from_coordinate(event.pageX - canvas_left_offset),
        y = y_index_from_coordinate(event.pageY - canvas_top_offset);

    let clicked_tile = grid[x][y];
    let tile_entities = clicked_tile.map(entity_id => id_to_entity_class(entity_id).name);

    // This is a dirty hack that will break if we ever add more tooltips to the page.
    document.getElementsByClassName('tooltip-inner')[0].innerText = tile_entities;
  }, false);
}, 1000);
