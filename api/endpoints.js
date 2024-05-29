var city = 'Oradea'
var apiKey = 'cc954e6db559314fdca3a84daab3a4cc'
var unitsKey = 'metric'
var language = 'ro'
// var iconWeather = `${weatherIcon}`

function getCurrentWeatherEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&units=${unitsKey}&appid=${apiKey}`
}

// function getCurrentWeatherIcon(city) {
//     return `https://openweathermap.org/img/wn/${iconWeather}@x2.png`
// }