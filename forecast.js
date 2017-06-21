schedule("0 22 * * *", function () {
  request('http://api.wunderground.com/api/eacde5aa6c442f83/forecast/lang:DL/q/Germany/Berlin.json', function (error, response, body) {
      if (error){
        log('error:' + error); 
      } else {
        var forecast = JSON.parse(body).forecast.simpleforecast.forecastday[1].high.celsius;
        log('forecast:' +  forecast); 
        setState("ForecastTemp",forecast);
      }
  });
});
schedule("*/1 * * * *", function () {
  request('http://api.wunderground.com/api/eacde5aa6c442f83/conditions/lang:DL/q/Germany/Berlin.json', function (error, response, body) {
      if (error){
        log('error:' +  error); 
      } else {
        var temp = JSON.parse(body).current_observation.temp_c;
        log('temp:' + temp); 
        setState("AussenTemp",temp);
      }
  });

});
