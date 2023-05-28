const KEY =
  'api_key=live_5VbBmKbUQH9WgfUcZ9Lbgugg03WyBdGCTvnBNl2NwYYUAQ9Z9MDyy67sMbCS9I6Q';
const URL_BREEDS = 'https://api.thecatapi.com/v1/breeds?';
const URL_CAT_IMG = 'https://api.thecatapi.com/v1/images/';

function fetchCatByBreed(breedId) {
  return fetch(`${URL_CAT_IMG}${breedId}?${KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function fetchBreeds() {
  return fetch(`${URL_BREEDS}${KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
