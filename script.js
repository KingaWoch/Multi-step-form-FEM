const name = document.getElementById("name");
const nameErrorText = document.querySelector(".name-error-text");
const email = document.getElementById("email");
const emailErrorText = document.querySelector(".email-error-text");
const phone = document.getElementById("phone");
const phoneErrorText = document.querySelector(".phone-error-text");

const nextStepBtn = document.querySelector(".btn-first-step");

// step 1

nextStepBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // name validation

  let nameRexEx = /^[a-zA-Z\s]*$/;
  if (!name.value) {
    name.classList.add("invalid");
    nameErrorText.innerText = "This field is required";
  } else if (!name.value.match(nameRexEx)) {
    name.classList.add("invalid");
    nameErrorText.innerText = "Wrong format";
  } else {
    name.classList.remove("invalid");
    nameErrorText.innerText = "";
  }

  // email validation

  let emailRexEx = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

  if (!email.value) {
    email.classList.add("invalid");
    emailErrorText.innerText = "This field is required";
  } else if (!email.value.match(emailRexEx)) {
    email.classList.add("invalid");
    emailErrorText.innerText = "Wrong format";
  } else {
    email.classList.remove("invalid");
    emailErrorText.innerText = "";
  }

  // phone validation

  let phoneRexEx =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

  if (!phone.value) {
    phone.classList.add("invalid");
    phoneErrorText.innerText = "This field is required";
  } else if (!phone.value.match(phoneRexEx)) {
    phone.classList.add("invalid");
    phoneErrorText.innerText = "Wrong format";
  } else {
    phone.classList.remove("invalid");
    phoneErrorText.innerText = "";
  }

  if (
    name.value &&
    name.value.match(nameRexEx) &&
    email.value &&
    email.value.match(emailRexEx) &&
    phone.value &&
    phone.value.match(phoneRexEx)
  ) {
    window.location.href = "step-2.html";
  }
});
