var AppDispatcher = require('../dispatcher/AppDispatcher')
var WeatherConstants = require('../constants/WeatherConstants')

module.exports = {
    receiveWeather: function(response){
        alert('receiving weather...')
        AppDispatcher.handleServerAction({
            actionType: WeatherConstants.GET_WEATHER_RESPONSE,
            response: response
        })
    }
}