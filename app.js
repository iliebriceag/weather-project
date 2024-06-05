// current weather
function displayWeather(city) {
  var URL = currentWeatherEndpoint(city)

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const { dt, name, main, weather, wind } = data;

      var dateObject = new Date(dt * 1000);
      var hour = dateObject.getHours();
      var minutes = dateObject.getMinutes();
      var dayOfWeekName = getDayWeekName(dateObject);
      var weatherIcon = weather[0].icon;
      var description = weather[0].description;
      var reelFeel = main.feels_like;
      var windKmPHour = (wind.speed * 3600) / 1000;
      var CurrentWeatherDiv = document.querySelector('.current-weather')
      CurrentWeatherDiv.innerHTML = `
         <div>
            <p class="fw-bold" style="font-size: 2rem">${name}</p>
            <p style="font-size: 1.5rem"><strong>${dayOfWeekName}</strong>, ${hour}:${minutes}</p>
           <div class="d-flex">
             <p class="fw-bold mt-3" style="font-size: 2.5rem">${Math.round(main.temp)} °C</p>
             <img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png"/>
           </div>
         </div>
         <div class="fs-5">
            <p>Real feel: <strong>${Math.round(reelFeel)} °C</strong></p>
            <p class="capitalize-description">${description}</p>
            <p>Vânt: <strong>${Math.round(windKmPHour)} km/h</strong></p>
         </div>
         `;

      var currentCity = document.querySelector('.current-city')
      currentCity.innerHTML = `${city}`
    });
}

// choose location
const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const arad = document.querySelector(".dropdown-menu .arad");
const sibiu = document.querySelector(".dropdown-menu .sibiu");

function updateCurrentCity(city) {
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function selectedCity(city) {
  updateCurrentCity(city);
  displayWeather(city);
  displayWeatherForecast(city);
}

bucharest.addEventListener("click", function () {
  selectedCity("București");
});
timisoara.addEventListener("click", function () {
  selectedCity("Timișoara");
});
oradea.addEventListener("click", function () {
  selectedCity("Oradea");
});
arad.addEventListener("click", function () {
  selectedCity("Arad");
});
sibiu.addEventListener("click", function () {
  selectedCity("Sibiu");
});

// weather 5days
function displayWeatherForecast(city) {
  const URL = forecastURL(city);

  let forecastDiv = document.querySelector(".weather-forecast");
  forecastDiv.innerHTML = "";

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const { list } = data;
      const daysMap = {};

      list.forEach((element) => {
        const { dt } = element;
        const day = getDayWeekName(dt);
        if (daysMap[day]) {
          daysMap[day].push(element);
        } else {
          daysMap[day] = [element];
        }
      });

      for (key in daysMap) {
        forecastDiv.innerHTML += `<h3 class="text-primary">${key}</h3>`;
        let days = daysMap[key];
        days.forEach((element) => {
          const { dt, main, weather } = element;
          const hour = getHour(dt);
          const temperature = Math.round(main.temp);
          const realFeel = Math.round(main.feels_like);
          var description = weather[0].description;
          var weatherIcon = weather[0].icon;

          forecastDiv.innerHTML += `
            <div class="w-100 d-flex justify-content-between align-items-center p-2 mb-2 border">
              <div>${hour}</div>
              <div><img src="http://openweathermap.org/img/wn/${weatherIcon}@2x.png"/></div>
              <div class="fs-2"><strong>${temperature}°C</strong></div>
              <div class="capitalize-description">${description}</div>
              <div>Real feel: <strong>${realFeel}°C</strong></div>
            </div>
          `;
        });
      }
    });
}

// to top
const mybtn = document.getElementById("top-btn");
window.onscroll = function () { scrollTop() };

function scrollTop() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybtn.style.display = "block";
  } else {
    mybtn.style.display = "none";
  }
}

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}