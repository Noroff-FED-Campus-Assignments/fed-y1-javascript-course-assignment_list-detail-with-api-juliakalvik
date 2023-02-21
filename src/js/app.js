/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

const dogBreedsList = document.querySelector("#js-list-container");

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the list to the DOM

const url =
  "https://api.thedogapi.com/v1/breeds?api_key=live_eCLUkH7OGmrRQFCeC0yvri5a8BrHQgrXv3zWJ4nEj8Gl74j4DDUwxHmxBPevAfZx";

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

//1 lag en variabel som skal skrives til HTML-en

//gets a list of breeds
function writeToHTML(breeds) {
  let breedNames = ""; //Hires breednames to go to vegas, (But outside vegas so that she/he/they comes back again)
  for (let i = 0; i < breeds.length; i++) {
    //Goes to vegas
    breedNames =
      //makes sure not to overwrite the other objects by including itself
      breedNames +
      //Writes the link to the details page, and includes the image, since it doesnt appear in the details
      "<a href=details.html?id=" +
      breeds[i].id +
      "&image=" +
      breeds[i].image.url +
      "> <div> " +
      //Includes the name, in the link so that it is clickable.
      breeds[i].name +
      "<br>" +
      //Adde the life_span
      breeds[i].life_span +
      "<br>" +
      //Sets the width and adds the image!
      "<img class=card_img src=" +
      breeds[i].image.url +
      "></img>" +
      "<br> </div></a>";
  }
  //Writes the new string (Generated in the for loop above) to the HTML
  dogBreedsList.innerHTML = breedNames;
}

writeToHTML(fetchedBreeds);

//3 skriv ut variabelen:

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

const searchField = document.querySelector("#js-list-search");

searchField.addEventListener("input", function (event) {
  // Gets the input from the HTML
  let searchInputValue = event.target.value;
  // Uses the input to filter the fetched breeds
  let searchedBreeds = filterBreeds(searchInputValue);
  // Writes the breeds to the HTML
  writeToHTML(searchedBreeds);
});

// Gets a searchterm from the HTML (look at function above)
function filterBreeds(searchTerm) {
  // Calls a filterfuntion to the list, wich is called "filtered"
  let filtered = fetchedBreeds.filter(function (breed) {
    //Returns any name that corresponds with the searchterm written in the html
    console.log("SearchTERM", searchTerm);
    return breed.name.toLowerCase().includes(searchTerm);
  });
  //Returns the list that is filtered above.
  return filtered;
}

//få inn trim!V

const filteringBreeds = document.querySelector("#js-list-filter");

filteringBreeds.addEventListener("input", function (event) {
  let searchInputValue = event.target.value;
  let filtered = fetchedBreeds.filter(function (breed) {
    return breed.life_span.includes(searchInputValue);
  });
  console.log(filtered);
  console.log(searchInputValue);
  writeToHTML(filtered);
});

//Reliable, Fearless, Energetic, Lively, Self-assured"

const filterPersonality = document.querySelector("#js-list-personality");

filterPersonality.addEventListener("input", function (event) {
  let searchInputValue = event.target.value;
  console.log("linje 131 funker", searchInputValue);
  let filtered = fetchedBreeds.filter(function (breed) {
    return breed.temperament.includes(searchInputValue);
  });
  console.log("filtered temperament", filtered);

  writeToHTML(filtered);
});

//function filterPersonality() {
//let personality = document.getElementById("#js-list-personality"),
// url = `https://api.thedogapi.com/v1/breeds/?api_key=live_eCLUkH7OGmrRQFCeC0yvri5a8BrHQgrXv3zWJ4nEj8Gl74j4DDUwxHmxBPevAfZx`;
//}
//console.log(personality);

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
