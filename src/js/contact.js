/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/advanced-form.html#L50
============================================
*/

// TODO: Get DOM elements from the DOM

// TODO: Create event listeners for the form

/*
============================================
API calls
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/advanced-form.html#L157
============================================
*/

// TODO: Set up a function to fetch data from the API

/*
============================================
Helper functions
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/advanced-form.html#L118
============================================
*/

// TODO: Create a function to validate an input field

// TODO: Create a function to create a DOM element

const formEl = document.querySelector("#js-form");
const nameEl = document.querySelector("#js-name");
const emailEl = document.querySelector("#js-email");
const passwordEl = document.querySelector("#js-password");
const messageContainerEl = document.querySelector("#js-message-container");

// Minmum 2 characters, must be letters only
const minLengthRegex = /^[a-zA-Z]{2,}/;

// Email Validation as per RFC2822 standards.
const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

// - at least 8 characters
// - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
// - Can contain special characters
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

formEl.addEventListener("submit", (event) => {
  // Stop the form from reloading the page
  event.preventDefault();

  const name = nameEl.value;
  const email = emailEl.value;
  const password = passwordEl.value;

  const isNameValid = validateField(nameEl, minLengthRegex);
  const isEmailValid = validateField(emailEl, emailRegex);
  const isPasswordValid = validateField(passwordEl, passwordRegex);

  messageContainerEl.innerHTML = "";

  if (!isNameValid) {
    alert("Please enter a name");
    return;
  }

  if (!isEmailValid) {
    alert("Please check your email");
    return;
  }

  if (!isPasswordValid) {
    alert("Please enter a valid password");
    return;
  }

  submitForm(name, email, password);
});

const validateName = () => validateField(event.target, minLengthRegex);

nameEl.addEventListener("input", validateName);
nameEl.addEventListener("blur", validateName);

const validateEmail = () => validateField(event.target, emailRegex);

emailEl.addEventListener("input", validateEmail);
emailEl.addEventListener("blur", validateEmail);

const validatePassword = () => validateField(event.target, passwordRegex);

passwordEl.addEventListener("input", validatePassword);
passwordEl.addEventListener("blur", validatePassword);

function validateField(field, regex, errorMessage) {
  const value = field.value.trim();
  const validationMessageEl = field.parentNode.querySelector("[data-id]");

  if (regex.test(value) && value !== "") {
    field.classList.add("is-success");
    field.classList.remove("is-error");

    displayError(validationMessageEl);
    return true;
  } else {
    field.classList.add("is-error");
    field.classList.remove("is-success");

    displayError(
      validationMessageEl,
      errorMessage || "Please enter a valid value"
    );
    return false;
  }
}

function displayError(container, error = "") {
  container.innerHTML = error;
}

function resetForm() {
  formEl.reset();

  nameEl.classList.remove("is-success");
  emailEl.classList.remove("is-success");
  passwordEl.classList.remove("is-success");

  document.querySelectorAll("[data-id]").forEach((el) => {
    el.innerHTML = "";
  });
}

// SUbmit the form data to the server
async function submitForm(name, email, password) {
  try {
    const response = await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    alert("Form submitted");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);

    displayError(messageContainerEl, error);
  } finally {
    resetForm();
  }
}
