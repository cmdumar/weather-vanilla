import fetchWeather from './fetch';

async function getData(city, unit) {
  const data = await fetchWeather(city, unit);
  const { name } = data;
  const {
    feels_like: feelsLike, humidity, temp, temp_max: tempMax, temp_min: tempMin, pressure,
  } = data.main;
  const [details] = await data.weather;
  const { speed } = data.wind;
  const { description, main, icon } = details;
  const v = {
    name,
    feelsLike,
    humidity,
    temp,
    main,
    description,
    tempMin,
    tempMax,
    icon,
    pressure,
    speed,
  };
  return v;
}

function renderWeather(data) {
  const content = document.querySelector('#search-results');
  const {
    temp,
    name,
    main,
    icon,
    feelsLike,
    humidity,
    speed,
    pressure,
    tempMax,
    tempMin,
    description,
  } = data;
  content.innerHTML = `
                <div class="location">
                   <h2>${name}</h2>
                </div>
                <div class="temperature">
                    <p class="temp-text">
                        <img src='https://openweathermap.org/img/wn/${icon}@4x.png' alt="icon" />
                        ${temp}°<small>C</small>
                    </p>
                    <p class="realfeel-text">${description}</p>
                </div>
                <div class="description">
                    <p>${main}</p>
                </div>
                <div class="details">
                    <div class="col">
                        <div>
                            <p>Humidity</p>
                            <p>${humidity}%</p>
                        </div>
                        <div>
                            <p>Wind</p>
                            <p>${speed} km/h</p>
                        </div>
                        <div>
                            <p>Pressure</p>
                            <p>${pressure} mb</p>
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <p>Temperature Min</p>
                            <p>${tempMin}°<small>C</small></p>
                        </div>
                        <div>
                            <p>Temperature Max</p>
                            <p>${tempMax}°<small>C</small></p>
                        </div>
                        <div>
                            <p>Feels Like</p>
                            <p>${feelsLike}°<small>C</small></p>
                        </div>
                    </div>
                </div>
    `;
}

export { getData, renderWeather };