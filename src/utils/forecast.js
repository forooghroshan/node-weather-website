request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f8e521f1eaa11ca0cc1b19c6dbba5704&query=' + latitude + ',' + longitude + '&units=f'
    //request({ url: url, json: true }, (error, response) => {
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
            // } else if (response.body.error) {
        } else if (body.error) {
            callback('location not find', undefined)
        } else {
            callback(undefined,
                // response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature +
                // ' degrees out. This is a ' + response.body.current.precip + '% chance of rain'
                body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature +
                ' degrees out. This is a ' + body.current.precip + '% chance of rain'

            )
        }
    })
}

module.exports = forecast