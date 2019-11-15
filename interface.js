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
    thermostat.powerSavingModeOn();
    updatePowerSavingMode();
  });

  $('#powersave-off').on('click', function() {
    thermostat.powerSavingModeOff();
    updatePowerSavingMode();
  });

  $('#Energy-high').on('click', function() {
    thermostat.energy();
    energySaving();
  });

  $('#Energy-high').on('click', function() {
    thermostat.energy();
    energySaving();
  });
  function updateTemperature() {
    $('#temp').text(thermostat._temperature);
  };

  function updatePowerSavingMode() {
    $('#powerSavingMode').text(thermostat._powerSavingMode);
  };

  function energySaving() {
    $('#energy').text(thermostat._energyUsage);
  };

  $('#current-city').change(function(){ 
      var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);

  // function displayWeather(city) {
  //   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  //   var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
  //   var units = '&units=metric';
  //   $.get(url + token + units, function(data) {
  //     $('#current-temperature').text(data.main.temp);
  });
   });
  });
