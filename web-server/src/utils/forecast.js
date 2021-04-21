const request = require("postman-request");

const forecast = (city, callback) => {
    const api_key = 'http://api.weatherstack.com/current?access_key=17a1cccf8eba608ac806a71d314faffe&query=' + city;

    request({url: api_key, json: true}, (err, res) => {
        if(err){

            callback('Network error.', undefined)

        } else if (res.body.err){

            callback('Could not find location.')

        } else {
        
            callback(undefined, "It is currently " + res.body.current.temperature + "°C outside. It feels like " + res.body.current.feelslike + "°C. " + res.body.current.weather_descriptions[0] + ".")
        }
    })
 
}

module.exports = forecast;