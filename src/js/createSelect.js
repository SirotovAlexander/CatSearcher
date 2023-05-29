import { fetchBreeds } from './cat-api';
import { select } from '../index';

async function createSelectOptions() {
  const getCats = await fetchBreeds();
  const markup = getCats
    .map(breed => {
      const { id, name } = breed;

      return `<option value="${id}">${name}</option>`;
    })
    .join('');
  select.insertAdjacentHTML('afterbegin', markup);
}

export { createSelectOptions };
