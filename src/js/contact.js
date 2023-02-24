/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/advanced-form.html#L50
============================================
*/
/* 
Name - required
Subject - must have a value with a minimum length of 10
Email - must have a value and be formatted like an email address
Address - must have a value with a minimum length of 25
*/
// TODO: Get DOM elements from the DOM
//const formElement = document.getElementById("form");
const formElement = document.getElementById("form");
const nameElement = document.getElementById("form-name");
const passwordElement = document.getElementById("form-password");
const emailElement = document.getElementById("form-email");
const feedback = document.getElementById("feedback");
const streetAdressElement = document.getElementById("form-streetaddress");
const messageElement = document.getElementById("form-message");

// TODO: Create event listeners for the form

formElement.addEventListener("submit", validateInput, true);

/*
============================================
Helper functions
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/advanced-form.html#L118
============================================
*/

// TODO: Create a function to validate an input field

// Minmum 2 characters, must be letters only
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

// TODO: Create a function to create a DOM element

// Email Validation as per RFC2822 standards.

// - at least 8 characters
// - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
// - Can contain special characters
