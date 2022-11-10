const cardNumber = document.querySelector(".card-no");
const cardHolder = document.querySelector(".card-holder");
const numberInput = document.querySelector(".card-number");
const nameInput = document.querySelector(".card-name");
const cvcInput = document.querySelector(".cvc");
const cvc = document.querySelector(".CVC");
const form = document.querySelector("form");
const year = document.querySelector(".year");
const month = document.querySelector(".month");
const dateError = document.querySelector(".date small");

function checkValidity() {
  //   let pattern = /[abc]/g;
  //   let cardNo = numberInput.value;
  //   console.log(cardNo);
  //   console.log(cardNo.match(pattern));
  //   if (cardNo.match(pattern)) {
  //     numberInput.classList.add = "error";
  //     numberInput.nextElementSibling.style.display = "block";
  //   }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkValidity();
});

numberInput.addEventListener("change", () => {
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

function checkBlank() {
  if (this.value === "") {
    this.classList.add = "error";
    this.nextElementSibling.style.display = "block";

    if (this.classList.contains("year")) {
      dateError.style.display = "block";
    }
  } else {
    this.classList.remove = "error";
    this.nextElementSibling.style.display = "none";
  }
}

cvcInput.addEventListener("focus", checkBlank);

year.addEventListener("focus", checkBlank);

month.addEventListener("focus", checkBlank);
