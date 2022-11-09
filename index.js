const cardNumber = document.querySelector(".card-no");
const cardHolder = document.querySelector(".card-holder");
const numberInput = document.querySelector(".card-number");
const nameInput = document.querySelector(".card-name");
const cvcInput = document.querySelector(".cvc");
const cvc = document.querySelector(".CVC");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

numberInput.addEventListener("change", () => {
  cardNumber.innerHTML = numberInput.value;
});

nameInput.addEventListener("change", () => {
  cardHolder.firstChild.nodeValue = nameInput.value;
});

cvcInput.addEventListener("change", () => {
  cvc.innerHTML = cvcInput.value;
});
