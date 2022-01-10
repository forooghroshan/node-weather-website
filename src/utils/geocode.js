const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZm9yb29xIiwiYSI6ImNreTRrbTF0YTA3dXgyd3MxNm9obGhjMHcifQ.OrCKKKmlIDzTE2LOdrm9aw&limit=1'

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to service', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}



module.exports = geocode