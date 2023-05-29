const URL = 'https://api.thecatapi.com/v1/breeds?';
const API_KEY =
  'api_key=live_1NOx9soh7LgHddoUwln68pyq9JBALoejCVSL5m8mJoD2YMHbQT3GYcrFhj1rznIw';

async function fetchBreeds() {
  const request = await fetch(`${URL}${API_KEY}`);
  if (!request.ok) {
    throw new Error(error.message);
  }

  return request.json();
}

function fetchCatByBreed(breedId) {}

export { fetchBreeds };
export { fetchCatByBreed };
