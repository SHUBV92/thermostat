describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("Initialize", function(){
  
    it('starts with temperature of 20 degrees', function() {
      expect(thermostat.temperature()).toEqual(20);
    });

  });
  
  describe ("Up & Down", function() {

    it('can increae the temperature with "up"', function() {
      thermostat.up()
      expect(thermostat.temperature()).toEqual(21);
    });


    it('can decreae the temperature with "down"', function() {
      thermostat.down()
      expect(thermostat.temperature()).toEqual(19);
    });

    it('Throw error once minimum temperature has reached', function (){
      thermostat._temperature = 10
      expect(function() { thermostat.down() }).toThrow("Minimum temperature reached")
    });

    it('Throw error once maximum temperature has reached', function (){
      thermostat._powerSavingMode = true
      thermostat._temperature = 25
      expect(function() { thermostat.up() }).toThrow("Maximum temperature reached")
    });

    it('Throw error once maximum temperature has reached', function (){
      thermostat._powerSavingMode = false
      thermostat._temperature = 32
      expect(function() { thermostat.up() }).toThrow("Maximum temperature reached")
    });
  
    it("Reset the temperature to 20 with a reset function", function(){
      thermostat._temperature = 11
      thermostat.reset()
      expect(thermostat._temperature).toEqual(20)
    });
  });

  describe ("Power Saving Mode", function() {

    it('Defaults to Power saving mode', function() {
      expect(thermostat._powerSavingMode).toEqual(true)
    })

    it('Power Saving mode is on then max temperature is 25', function() {
      thermostat._powerSavingMode = true 
      thermostat.up()
      expect(thermostat._maxTemp).toEqual(25)
    });

    it('Power Saving mode is off then max temperature is 32', function() {
      thermostat._powerSavingMode = false
      thermostat.up()
      expect(thermostat._maxTemp).toEqual(32)
    });

    it('Power Saving mode is on', function(){
      thermostat.powerSavingModeOn()
      expect(thermostat._powerSavingMode).toEqual(true)
    })

    it('Power Saving mode is off', function(){
      thermostat.powerSavingModeOff()
      expect(thermostat._powerSavingMode).toEqual(false)
    })

    
  });

  describe("Energy Usage", function(){
    
    it("Return Energy Usage rating", function(){
      thermostat._temperature = 18
      thermostat.energy()
      expect(thermostat._energyUsage).toEqual("low usage")
    }); 

    it("Return Energy Usage rating", function(){
      thermostat._temperature = 34
      thermostat.energy()
      expect(thermostat._energyUsage).toEqual("High usage")
    }); 

    it("Return Energy Usage rating", function(){
      thermostat._temperature = 21
      thermostat.energy()
      expect(thermostat._energyUsage).toEqual("medium usage")
    }); 

  });

});