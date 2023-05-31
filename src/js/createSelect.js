import { fetchBreeds } from './cat-api';
import { select } from '../index';
import { errorMassage } from '../index';
import { loader } from '../index';

async function createSelectOptions() {
  try {
    select.classList.add('select__wait');
    loader.classList.add('loader__on');

    const getCats = await fetchBreeds();
    const markup = getCats
      .map(breed => {
        const { id, name } = breed;

        return `<option value="${id}">${name}</option>`;
      })
      .join('');
    select.insertAdjacentHTML('afterbegin', markup);

    loader.classList.remove('loader__on');
    select.classList.remove('select__wait');
  } catch (error) {
    console.log(error);
  }
}

export { createSelectOptions };
