function Thermostat(powerSavingMode = true) {
  this._minTemperature = 10;
  this._temperature = 20;  
  this._maxTemp = 25
  this._powerSavingMode = powerSavingMode;
  this._energyUsage = "medium usage"
}

            // DISPLAY TEMPERATURE 

Thermostat.prototype.temperature = function() {
  return this._temperature;
}

Thermostat.prototype.up = function() {
  if (this._temperature >= this._maxTemp ) throw ("Maximum temperature reached");
  
  this._temperature++;
  if (this._powerSavingMode === true) {
    this._maxTemp = 25
  }
  if (this._powerSavingMode === false){ 
     this._maxTemp = 32
  }  
}

Thermostat.prototype.down = function() {
  if (this._temperature <= this._minTemperature ) throw ("Minimum temperature reached");
  this._temperature --;
}

Thermostat.prototype.reset = function() {
  this._temperature = 20
 };
 
            // POWER SAVING MODE

Thermostat.prototype.powerSavingModeOn = function() {
  this._powerSavingMode = true
}

Thermostat.prototype.powerSavingModeOff = function() {
  this._powerSavingMode = false
}

                // ENERGY 

Thermostat.prototype.energy = function() {
  if (this._temperature <= 18){
    this._energyUsage = "Low usage"
  }
  if (this._temperature >= 25) {
    this._energyUsage = "High usage"
  } else 
    this._energyUsage = "Medium usage"

};



