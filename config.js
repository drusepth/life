class Config {
  static show_cell_borders() {
    return document.getElementById('config-show-grid').checked;
  }

  static update_frequency() {
    return 51 - document.getElementById('config-update-timer').value;
  }
}
