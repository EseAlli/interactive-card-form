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
  console.log(numberInput.value.length);
  cardNumber.innerHTML = numberInput.value;
  if (numberInput.value.length > 0) {
    if (
      numberInput.value.length === 4 ||
      numberInput.value.length === 9 ||
      numberInput.value.length === 14
    ) {
      numberInput.value += " ";
    }
  }
});

nameInput.addEventListener("change", () => {
  cardHolder.firstChild.nodeValue = nameInput.value;
});

cvcInput.addEventListener("change", () => {
  cvc.innerHTML = cvcInput.value;
});
