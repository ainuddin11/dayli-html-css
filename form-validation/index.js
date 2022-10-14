/*const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
};

*/

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password1 = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputValidation();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerHTML = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

//user name chacking
const userNameFunc = () => {
  const userNameValue = username.value.trim();

  if (userNameValue === "" || userNameValue === null) {
    setError(username, "Please Provide username");
  } else {
    setSuccess(username);
    console.log(`somtire`);
  }
};

//email checking
const emailFucn = () => {
  const emailValue = email.value.trim();

  if (emailValue == "") {
    setError(email, "please provie email");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "please provide a valid email");
  } else {
    setSuccess(email);
  }
};

const passFucn1 = () => {
  const passwordValue = password1.value.trim();

  if (passwordValue == "" || passwordValue.length < 6) {
    setError(password1, "password need more than 6 charecter");
  } else {
    setSuccess(password1);
  }
};

const passFucn2 = () => {
  const password2Value = password2.value.trim();
  const passwordValue = password1.value.trim();

  if (password2Value == "" || password2Value.length < 6) {
    setError(password2, "password need more than 6 charecter");
  } else if (passwordValue !== password2Value) {
    setError(password2, "password does not match");
  } else {
    setSuccess(password2);
  }
};

username.addEventListener("focusout", userNameFunc);
email.addEventListener("focusout", emailFucn);
password1.addEventListener("focusout", passFucn1);
password2.addEventListener("focusout", passFucn2);

const inputValidation = () => {
  userNameFunc();
  emailFucn();
  passFucn1();
  passFucn2();

  username.value = "";
};
