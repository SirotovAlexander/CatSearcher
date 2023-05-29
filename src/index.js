import { fetchBreeds } from './js/cat-api';
import { fetchCatByBreed } from './js/cat-api';
import { createSelectOptions } from './js/createSelect';

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

select.addEventListener('change', onSelect);

createSelectOptions();

function onSelect(event) {
  console.log(event.target.value);
}

export { select };
