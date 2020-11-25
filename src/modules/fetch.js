const key = '0028ea367b25a551e7348f7875810282';
const url = 'https://api.openweathermap.org/data/2.5/weather?q=';

async function fetchWeather(city, unit) {
  let response;
  try {
    response = await fetch(`${url}${city}&appid=${key}&units=${unit}`);
    response = await response.json();
  } catch (err) {
    response = err;
  }
  return response;
}

export default fetchWeather;