export { fetchBreeds, fetchCatByBreed };

const BASE_URL = 'https://api.thecatapi.com/v1/';
const BREEDS_ENDPOINT = 'breeds';
const IMAGES_ENDPOINT = 'images/search';
const API_KEY =
  'live_5VbBmKbUQH9WgfUcZ9Lbgugg03WyBdGCTvnBNl2NwYYUAQ9Z9MDyy67sMbCS9I6Q';

function fetchBreeds() {
  return fetch(`${BASE_URL}${BREEDS_ENDPOINT}?api_key=${API_KEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }
  );
}

function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}${IMAGES_ENDPOINT}?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
