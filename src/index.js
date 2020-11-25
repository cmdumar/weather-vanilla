import './style.scss';
import initFn from './modules/dom';
import { getData, renderWeather } from './modules/helpers';

initFn();

const search = document.querySelector('#search-btn');

const f = document.querySelector('form');

search.addEventListener('click', (e) => {
  e.preventDefault();
  const { city } = f.elements;
  if (city.value && city.value.length > 3) {
    const res = getData(city.value, 'metric');
    res.then((resp) => {
      renderWeather(resp);
    });
  }
});