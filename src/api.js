const url = 'https://api.thecatapi.com/v1';
const api_key = "live_Iyo7VcQGHKvHKgU6BMlqqHDZIce9a1A4yLiDGSIC5aOzd8QswJGqEYONKZrtMkE7";

export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${api_key}`)
        .then(response => response.json()
        );       
};

export function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => response.json()
        );  
};

 