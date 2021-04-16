const request = require('postman-request');


const api_key = 'http://api.weatherstack.com/current?access_key=17a1cccf8eba608ac806a71d314faffe&query=cape_town'

request({url: api_key, json: true}, (error, res) => {
    
    console.log("It is currently " + res.body.current.temperature + "°C outside. It feels like " + res.body.current.feelslike + "°C. " + res.body.current.weather_descriptions[0] + ".")
   
    // console.log(res.body)
})

