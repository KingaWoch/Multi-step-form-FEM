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
