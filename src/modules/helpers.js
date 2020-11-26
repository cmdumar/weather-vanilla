import fetchWeather from './fetch';

async function getData(city, unit) {
  let v;
  let data;
  try {
    data = await fetchWeather(city, unit);
    const { name, cod } = data;
    const {
      feels_like: feelsLike, humidity, temp, temp_max: tempMax, temp_min: tempMin, pressure,
    } = data.main;
    const [details] = await data.weather;
    const { speed } = data.wind;
    const { description, main, icon } = details;
    v = {
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
      unit,
      cod,
    };
  } catch (err) {
    v = data;
  }
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
    unit,
  } = data;
  content.innerHTML = `
                <div class="location">
                   <h2>${name}</h2>
                </div>
                <div class="temperature">
                    <p class="temp-text">
                        <img src='https://openweathermap.org/img/wn/${icon}@4x.png' alt="icon" />
                        ${temp}°<small>${unit === 'metric' ? 'C' : 'F'}</small>
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
                            <p>${tempMin}°<small>${unit === 'metric' ? 'C' : 'F'}</small></p>
                        </div>
                        <div>
                            <p>Temperature Max</p>
                            <p>${tempMax}°<small>${unit === 'metric' ? 'C' : 'F'}</small></p>
                        </div>
                        <div>
                            <p>Feels Like</p>
                            <p>${feelsLike}°<small>${unit === 'metric' ? 'C' : 'F'}</small></p>
                        </div>
                    </div>
                </div>
    `;
}

function renderErr({ message }) {
  const content = document.querySelector('#search-results');
  content.innerHTML = `
    <div class="error">
        <p>${message}</p>
    </div>
  `;
}

async function eventFn(f, unit) {
  const { city } = f.elements;
  const body = document.querySelector('body');
  if (city.value && city.value.length > 1) {
    const res = await getData(city.value, unit.value);
    if (res.cod === 200) {
      const { main } = res;
      renderWeather(res);
      body.style.background = `#a0e7e5 url(https://source.unsplash.com/1920x1080/?${main},weather) no-repeat center center`;
    } else {
      renderErr(res);
      body.style.background = 'linear-gradient(to bottom, #f46001, #e14802)';
    }
  }
}

export default eventFn;