var AppDispatcher = require('../dispatcher/AppDispatcher');
var WeatherConstants = require('../constants/WeatherConstants');
var WeatherAPI = require('../util/weatherAPI');

module.exports = {
    getRandom: function(city) {
        AppDispatcher.handleViewAction({
          actionType: WeatherConstants.GET_WEATHER
        });
    
        WeatherAPI.get(city);
      }
}