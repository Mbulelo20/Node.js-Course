const request = require('postman-request')

const api = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(addr) +'.json?access_token=pk.eyJ1IjoibWJ1bGVsbyIsImEiOiJja25rN2pxbGIwOGR3MnZvMHZhbm04c3dlIn0.D1L9umIswRGLIgDh0BpSYg'

request({url: api, json: true}, (error, res) => {
    
    if(error){

        console.log('Oops! Something went wrong')

    } else if (res.body.features.length === 0){

        console.log('Could not find location.')

    } else {

        console.log('Latitude: ' + res.body.features[0].center[1])
        console.log('Longitude: ' + res.body.features[0].center[0])

    }
    

    // console.log(res.body)
})

