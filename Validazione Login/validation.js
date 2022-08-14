// Query Selectors
const form = document.querySelector(".form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm-password");

// Functions
function checkEmail(input) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email format is not valid");
  }
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const errorText = formControl.querySelector("small");
  errorText.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkRequired(inputArray) {
  inputArray.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required `);
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min || input.value.length === "") {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters long`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must not exceed ${max} characters long`
    );
  } else {
    showSuccess(input);
  }
}

function getFieldName(input) {
  // Returns the id name of the input (such as "username", "password"),
  // but adding a captial letter to the beginning of each ID and then joining
  //the rest of the word to the capital letter
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function doPasswordsMatch(input, input2) {
  if (input.value === input2.value) {
    showSuccess(input2);
  } else {
    showError(input, "Both passwords must match!");
    showError(input2, "Both passwords must match!");
  }
}

// Event Listeners
form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkRequired([username, email, password, passwordConfirm]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 30);
  checkLength(passwordConfirm, 6, 30);
  checkEmail(email);
  doPasswordsMatch(password, passwordConfirm);
});
