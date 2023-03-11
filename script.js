// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   if (!form.checkValidity()) {
//     e.preventDefault();
//   }

//   form.classList.add("was-validated");
// });

const cards = document.querySelectorAll(".card");

cards.forEach((card) =>
  card.addEventListener("click", () => {
    if (card.classList.contains("active")) {
      card.classList.toggle("active");
    } else {
      cards.forEach((card) => card.classList.remove("active"));
      card.classList.add("active");
    }
  })
);

// const inputFields = document.querySelectorAll(".input-field");
// inputFields.forEach((inputField) =>
//   inputField.addEventListener("click", () => {
//     if (inputField.classList.contains("active")) {
//       inputField.classList.remove("active");
//     } else {
//       inputField.classList.add("active");
//     }
//   })
// );
const inputFields = document.querySelectorAll(".input-field");
const inputcheckbox = document.querySelectorAll(".form-check-input");

inputFields.forEach((inputField) =>
  inputField.addEventListener("click", () => {
    if (inputcheckbox.checked) {
      inputField.classList.remove("active");
    } else {
      inputField.classList.add("active");
    }
  })
);
