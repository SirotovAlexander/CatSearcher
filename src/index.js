import { fetchBreeds } from './js/cat-api';
import { fetchCatByBreed } from './js/cat-api';
import { createSelectOptions } from './js/createSelect';

const select = document.querySelector('.breed-select');
const infoContainer = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const errorMassage = document.querySelector('.error');

// console.dir(infoContainer);

select.addEventListener('change', onSelect);

createSelectOptions();

function onSelect(event) {
  infoContainer.innerHTML = '';
  select.classList.add('select__wait');
  loader.classList.add('loader__on');
  fetchCatByBreed(event.target.value)
    .then(data => {
      const markup = `<img src="${data[0].url}" alt="${data[0].breeds[0].name}" width="500" height="500">
        <div class='cat-info__wrapper'>
      <h2>${data[0].breeds[0].name}</h2>
      <p>${data[0].breeds[0].description}</p>
      <span>${data[0].breeds[0].temperament}</span>
      </div>`;
      loader.classList.remove('loader__on');
      select.classList.remove('select__wait');
      infoContainer.innerHTML = markup;
    })
    .catch(error => {
      console.log(error);
      errorMassage.classList.add('error__on');
    });

  //   console.log(event.target.value);
}

export { select };
export { loader };
export { errorMassage };
