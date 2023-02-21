/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM
const breedDetails = document.querySelector("#object-details");
const breedDetailsHeader = document.querySelector("#js-h1");

console.log(breedDetails);

// TODO: Get the query parameter from the URL

const queryparameter = new URLSearchParams(window.location.search);

// TODO: Get the id from the query parameter

const id = queryparameter.get("id");
const image = queryparameter.get("image");

// TODO: Create a new URL with the id @example: https://www.youtube.com/shorts/ps7EkRaRMzs

const url =
  "https://api.thedogapi.com/v1/breeds/" +
  id +
  "?api_key=live_eCLUkH7OGmrRQFCeC0yvri5a8BrHQgrXv3zWJ4nEj8Gl74j4DDUwxHmxBPevAfZx";

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the lsit to the DOM

async function fetchBreed() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}

let fetchedBreed = await fetchBreed();

console.log(fetchedBreed);

breedDetailsHeader.innerHTML = fetchedBreed.name + "-";

let htmlText = "";
document.title = `Details for ${fetchedBreed.name}`;
htmlText += "<div class=details_content>";
htmlText += "<br> <img class=details_img src=" + image + ">";
htmlText += "<p> Lifespan: " + fetchedBreed.life_span + "</p>";
if (fetchedBreed.bred_for != undefined) {
  htmlText += "<p> Bred for: " + fetchedBreed.bred_for + "</p>";
}
if (fetchedBreed.temperament != undefined) {
  htmlText += "<p> Personality: " + fetchedBreed.temperament + "<p>";
}
htmlText += "</div>";

breedDetails.innerHTML = htmlText;

// TODO: Create event listeners for the filters and the search

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an a single of objects from the API

/*
============================================
Helper functions
============================================
*/

/**
 * TODO: Create a function to create a DOM element.
 * @example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */
