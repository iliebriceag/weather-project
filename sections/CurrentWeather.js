function displayWeather(city) {

    var apiUrl = getCurrentWeatherEndpoint(city)

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const { dt, name, main, weather, wind } = data;

            var dateObj = new Date(dt * 1000);
            var hour = dateObj.getHours();
            var minutes = dateObj.getMinutes();
            var dayOfWeekName = getDayWeekName(dateObj);
            var weatherIcon = weather[0].icon;
            var description = weather[0].description
            var reelFeel = main.feels_like
            var windKmPerHour = (wind.speed * 3600) / 1000;


            var CurrentWeatherContainer = document.querySelector('.current-weather')
            CurrentWeatherContainer.innerHTML = `
           
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
              <p>Vânt: <strong>${Math.round(windKmPerHour)} km/h</strong></p>
           </div>
           `;

           var currentCity = document.querySelector('.current-city')
           currentCity.innerHTML = `${city}`
        });
}