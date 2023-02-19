/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

const dogBreedsList = document.querySelector("#js-list-container");

console.log(dogBreedsList);

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the list to the DOM

const url =
  "https://api.thedogapi.com/v1/breeds?api_key=live_eCLUkH7OGmrRQFCeC0yvri5a8BrHQgrXv3zWJ4nEj8Gl74j4DDUwxHmxBPevAfZx&limit=10";

let fetchedBreeds = [];

async function fetchBreeds() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}

fetchedBreeds = await fetchBreeds();
console.log(fetchedBreeds);

//1 lag en variabel som skal skrives til HTML-en

let breedNames = "";

console.log(breedNames);

for (let i = 0; i < fetchedBreeds.length; i++) {
  //2 legg til hver hunderase til variabelen (Tips: +=)
  breedNames =
    breedNames +
    fetchedBreeds[i].name +
    "<br>" +
    fetchedBreeds[i].life_span +
    "<br>" +
    "<img width=200 src=" +
    fetchedBreeds[i].image.url +
    "></img>" +
    "<br>";
  console.log(breedNames, "dette er i Vegas");
}

console.log(breedNames, "ikke i vegas");

//3 skriv ut variabelen:
document.querySelector("#js-list-container").innerHTML = breedNames;

// TODO: Create event listeners for the filters and the search

/**
 * TODO: Create an event listener to sort the list.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L91
 */

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an array of objects from the API

/*
============================================
Helper functions
https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L154
============================================
*/

/**
 * TODO: Create a function to filter the list of item.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L135
 * @param {item} item The object with properties from the fetched JSON data.
 * @param {searchTerm} searchTerm The string used to check if the object title contains it.
 */

/**
 * TODO: Create a function to create a DOM element.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */
