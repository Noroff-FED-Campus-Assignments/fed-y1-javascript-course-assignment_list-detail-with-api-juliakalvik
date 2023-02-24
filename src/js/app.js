const dogBreedsList = document.querySelector("#js-list-container");

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
    alert(
      "Something went wrong! Please try again, or visit us later 🐶( - voff)"
    );
  }
}

fetchedBreeds = await fetchBreeds();

function writeToHTML(breeds) {
  let breedNames = "";
  for (let i = 0; i < breeds.length; i++) {
    breedNames =
      breedNames +
      "<a href=details.html?id=" +
      breeds[i].id +
      "&image=" +
      breeds[i].image.url +
      "> <div> " +
      breeds[i].name +
      "<br>" +
      breeds[i].life_span +
      "<br>" +
      "<img class=card_img alt='image of " +
      breeds[i].name +
      ".' src=" +
      breeds[i].image.url +
      "></img>" +
      "<br> </div></a>";
  }

  dogBreedsList.innerHTML = breedNames;
}

writeToHTML(fetchedBreeds);

const searchField = document.querySelector("#js-list-search");

searchField.addEventListener("input", function (event) {
  let searchInputValue = event.target.value;

  let searchedBreeds = filterBreeds(searchInputValue);

  writeToHTML(searchedBreeds);
});

function filterBreeds(searchTerm) {
  let filtered = fetchedBreeds.filter(function (breed) {
    return breed.name.toLowerCase().includes(searchTerm);
  });

  return filtered;
}

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

const filterPersonality = document.querySelector("#js-list-personality");

filterPersonality.addEventListener("input", function (event) {
  let selectValue = event.target.value;
  let filtered = fetchedBreeds.filter(function (breed) {
    if (breed.temperament != undefined) {
      return breed.temperament.toLowerCase().includes(selectValue);
    } else {
      return;
    }
  });
  console.log("filtered temperament", filtered);

  writeToHTML(filtered);
});

let order = [1, -1, 0];
function compare(dog1, dog2) {
  if (dog1.name < dog2.name) {
    return order[0];
  }
  if (dog1.name > dog2.name) {
    return order[1];
  } else {
    return 0;
  }
}

const orderBy = document.querySelector("#js-list-ascending");
orderBy.addEventListener("input", function (event) {
  let selectValue = event.target.value;
  if (selectValue === "za") {
    order = [1, -1];
  } else {
    order = [-1, 1];
  }
  let filtered = fetchedBreeds.sort(compare);
  writeToHTML(filtered);
});
