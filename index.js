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
const inputs = Array.from(document.querySelectorAll(".date-cvc input"));
const formInputs = Array.from(document.querySelectorAll("input"));

function checkValidity() {
  let pattern = /^[0-9]*$/;
  let cardNo = numberInput.value;
  if (!cardNo.match(pattern)) {
    numberInput.classList.add = "error";
    numberInput.nextElementSibling.style.display = "block";
  } else {
    numberInput.classList.remove = "error";
    numberInput.nextElementSibling.style.display = "none";
  }

  if (
    !(
      numberInput.value === "" &&
      nameInput.value === "" &&
      cvcInput.value === "" &&
      year.value === "" &&
      month.value === ""
    )
  ) {
    console.log("hello");
    formInputs.forEach((input) => {
      input.value === "";
    });
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkValidity();
});

numberInput.addEventListener("change", (event) => {
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
  if (this.value === "") {]
    this.classList.add = "error";
    if (this.classList.contains("year")) {
      dateError.style.display = "block";
    } else {
      this.nextElementSibling.style.display = "block";
    }
  } else {
    this.classList.remove = "error";
    this.nextElementSibling.style.display = "none";
    dateError.style.display = "none";
  }
}

cvcInput.addEventListener("keydown", checkBlank);

year.addEventListener("keydown", checkBlank);

month.addEventListener("keydown", checkBlank);
