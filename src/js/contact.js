const formElement = document.getElementById("form");
const nameElement = document.getElementById("form-name");
const passwordElement = document.getElementById("form-password");
const emailElement = document.getElementById("form-email");
const feedback = document.getElementById("feedback");
const streetAdressElement = document.getElementById("form-streetaddress");
const messageElement = document.getElementById("form-message");

formElement.addEventListener("submit", validateInput, true);

const nameRegex = /^[a-zA-Z]{1,}/;
const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

function validateInput(event) {
  event.preventDefault();
  let fail = false;
  let fields = "";
  console.log(nameRegex.test(nameElement.value));
  if (!nameRegex.test(nameElement.value)) {
    fields += "name, ";
    fail = true;
  }
  if (!passwordRegex.test(passwordElement.value)) {
    fields += "password, ";
    fail = true;
  }
  if (!emailRegex.test(emailElement.value)) {
    fields += "email, ";
    fail = true;
  }
  if (messageElement.value.length < 10) {
    fields += "form message, ";
    fail = true;
  }
  if (streetAdressElement.value.length < 25) {
    fields += "adress, ";
    fail = true;
  }
  if (fail) {
    feedback.innerHTML =
      "<p>There is something wrong in the " +
      fields +
      " field(s) please correct it and resubmit!</p>";
  } else {
    feedback.innerHTML =
      "<p> Congratulations! the form is correctly filled out! </p>";
    alert("You have submittet your form!");
  }
}
