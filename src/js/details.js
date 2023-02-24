const breedDetails = document.querySelector("#object-details");
const breedDetailsHeader = document.querySelector("#js-h1");
const queryparameter = new URLSearchParams(window.location.search);

const id = queryparameter.get("id");
const image = queryparameter.get("image");

const url =
  "https://api.thedogapi.com/v1/breeds/" +
  id +
  "?api_key=live_eCLUkH7OGmrRQFCeC0yvri5a8BrHQgrXv3zWJ4nEj8Gl74j4DDUwxHmxBPevAfZx";

async function fetchBreed() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    return results;
  } catch (error) {
    console.error(error);
    alert(
      "Something went wrong! Please try again, or visit later 🐶(- voff voff)"
    );
  }
}

let fetchedBreed = await fetchBreed();
breedDetailsHeader.innerHTML = fetchedBreed.name + " ";

let htmlText = "";
document.title = `🐶 ${fetchedBreed.name} info`;
htmlText += "<div class=details_content>";
htmlText +=
  "<br> <img alt='picture of a dog' class=details_img src=" + image + ">";
htmlText += "<p> Lifespan: " + fetchedBreed.life_span + "</p>";
if (fetchedBreed.bred_for != undefined) {
  htmlText += "<p> Bred for: " + fetchedBreed.bred_for + "</p>";
}
if (fetchedBreed.temperament != undefined) {
  htmlText += "<p> Personality: " + fetchedBreed.temperament + "<p>";
}
htmlText += "</div>";

breedDetails.innerHTML = htmlText;
