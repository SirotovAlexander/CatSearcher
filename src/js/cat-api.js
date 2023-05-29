const BASE_URL = 'https://api.thecatapi.com/v1/breeds?';
const SECOND_URL = 'https://api.thecatapi.com/v1/images/search?';
const API_KEY =
  'api_key=live_1NOx9soh7LgHddoUwln68pyq9JBALoejCVSL5m8mJoD2YMHbQT3GYcrFhj1rznIw';

async function fetchBreeds() {
  const request = await fetch(`${BASE_URL}${API_KEY}`);
  if (!request.ok) {
    throw new Error(error.message);
  }

  return request.json();
}

async function fetchCatByBreed(breedId) {
  const request = await fetch(`${SECOND_URL}breed_ids=${breedId}&${API_KEY}`);
  if (!request.ok) {
    throw new Error(error.message);
  }

  return request.json();
}

export { fetchBreeds };
export { fetchCatByBreed };
