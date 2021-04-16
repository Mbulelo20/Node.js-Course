const request = require('postman-request');


const api_key = 'http://api.weatherstack.com/current?access_key=17a1cccf8eba608ac806a71d314faffe&query=cape_town'

// request({url: api_key}, (error, res) => {

//     console.log(res.body)
//     // to parse the res into a better format
//     console.log(JSON.parse(res.body))
    
// })

// to parse the json automatically
request({url: api_key, json: true}, (error, res) => {
    // to access the 'current' property
    console.log(res.body.current)

    // to access the 'location' property
    console.log(res.body.location)

})