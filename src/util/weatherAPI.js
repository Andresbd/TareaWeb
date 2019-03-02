var weatherServerActions = require('../actions/weatherServerActions');
var superagent = require('superagent');

module.exports = {
    get: function (city) {
    superagent.get('http://api.openweathermap.org/data/2.5/forecast?APPID=88662ffa10f78c6fed57cb3e118a58e2&units=metric&q='+city.replace(/ /g,"+"))
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err) {
            alert(err)
        }
        weatherServerActions.receiveWeather(response.body);
      });
    }
}