const request = require('postman-request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


// request({url: api_key}, (error, res) => {

//     console.log(res.body)
//     // to parse the res into a better format
//     console.log(JSON.parse(res.body))
    
// })

// // to parse the json automatically
// request({url: api_key, json: true}, (error, res) => {
//     // to access the 'current' property
//     console.log(res.body.current)

//     // to access the 'location' property
//     console.log(res.body.location)

// })



//  error handling for low-level errors

// request({url: api_key}, (error, res) => {
//     if(error){

//         console.log('Oops! Something went wrong.')

//     } else if(res.body.error){

//         console.log('Could not find location.')

//     } else {

//         console.log(JSON.parse(res.body))
        
//     }  
// })



geocode('Pretoria', (err, data) => {
    console.log('Error: ', err)
    console.log('Data: ', data)
})