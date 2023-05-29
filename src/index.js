import { fetchBreeds } from './js/cat-api';
import { fetchCatByBreed } from './js/cat-api';
import { createSelectOptions } from './js/createSelect';

const select = document.querySelector('.breed-select');
const infoContainer = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

// console.dir(infoContainer);

select.addEventListener('change', onSelect);

createSelectOptions();

function onSelect(event) {
  fetchCatByBreed(event.target.value)
    .then(data => {
      const markup = `<img src="${data[0].url}" alt="${data[0].breeds[0].name}" width="500" height="500">
        <div class='cat-info__wrapper'>
      <h2>${data[0].breeds[0].name}</h2>
      <p>${data[0].breeds[0].description}</p>
      <span>${data[0].breeds[0].temperament}</span>
      </div>`;

      infoContainer.innerHTML = markup;
    })
    .catch(error => console.log(error));

  //   console.log(event.target.value);
}

export { select };
