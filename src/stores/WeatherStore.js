var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/WeatherConstants');
var ObjectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
// const loadJsonFile = require('load-json-file');

var CHANGE_EVENT = 'change';

var _store = {
    list: [],
    editing: true
}

var WeatherStore = ObjectAssign({},EventEmitter.prototype,{
    addChangeListener: function(cb) {
        this.on(CHANGE_EVENT, cb);
      },
    
      removeChangeListener: function(cb) {
        this.removeListener(CHANGE_EVENT, cb);
      },
    
      getList: function() {
        return _store;
      },

      clearList: function(){
        _store.list.splice(0,_store.list.length)
      }
});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType){
        case AppConstants.GET_WEATHER:

        break;

        case AppConstants.GET_WEATHER_RESPONSE:
            // var obj = JSON.parse(action)
            var x = []
            for(var i = 0; i < action.response.list.length; i++){
                if(i%4==0 && i%8!=0){
                    var obj = {}
                    obj.temp = JSON.stringify(action.response.list[i].main.temp)
                    obj.temp_min = JSON.stringify(action.response.list[i].main.temp_min)
                    obj.temp_max = JSON.stringify(action.response.list[i].main.temp_max)
                    obj.pressure = JSON.stringify(action.response.list[i].main.pressure)
                    obj.humidity = JSON.stringify(action.response.list[i].main.humidity)
                    obj.description = JSON.stringify(action.response.list[i].weather[0].description)
                    obj.datetime = JSON.stringify(action.response.list[i].dt_txt)
                    _store.list.push(obj)
                }
            }

            WeatherStore.emit(CHANGE_EVENT)
        break;
    }
})

module.exports = WeatherStore;