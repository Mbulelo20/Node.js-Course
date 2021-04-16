const request = require('postman-request')

const geocode = (addr, callback) => {

    // encodeURIComponent: used in interpreting special characters
    const api = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(addr) + '.json?access_token=pk.eyJ1IjoibWJ1bGVsbyIsImEiOiJja25rN2pxbGIwOGR3MnZvMHZhbm04c3dlIn0.D1L9umIswRGLIgDh0BpSYg'

    request({url: api, json: true}, (err, res) => {

        if(err){

            callback('Oops! Something went wrong.')

        }else if (res.body.features.length === 0){

            callback('Could not find location.', undefined)

        }else {
            callback(undefined, {
                latitude: res.body.features[0].center[1],
                longitude: res.body.features[0].center[0]
            })
            
        }
    })
}

module.exports = geocode