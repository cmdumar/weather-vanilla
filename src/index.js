import './style.scss';
import initFn from './modules/dom';
import eventFn from './modules/helpers';

initFn();

const search = document.querySelector('#search-btn');
const unit = document.querySelector('#unit-btn');

const f = document.querySelector('form');

search.addEventListener('click', async (e) => {
  e.preventDefault();
  await eventFn(f, unit);
});

unit.addEventListener('click', async (e) => {
  e.preventDefault();
  unit.value = unit.value === 'metric' ? 'imperial' : 'metric';
  unit.textContent = unit.value === 'metric' ? 'Celsius' : 'Fahrenheit';
  await eventFn(f, unit);
});