$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').on('click', function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersave-on').on('click', function() {
    thermostat.powerSavingMode();
    updateTemperature();
  });

  function updateTemperature() {
    $('#temp').text(thermostat._temperature);
  };

});
