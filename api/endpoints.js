var city = 'București'
var apiKey = 'cc954e6db559314fdca3a84daab3a4cc'
var units = 'metric'
var language = 'ro'

function currentWeatherEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&units=${units}&appid=${apiKey}`
}
function forecastURL(city) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${language}&units=${units}&appid=${apiKey}`
}
