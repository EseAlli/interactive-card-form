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
const date = document.querySelector(".card-date");
const thank = document.querySelector(".thank-you");

function checkValidity() {
  let pattern = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/;
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
    form.style.display = "none";
    thank.style.display = "flex";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkValidity();
});

numberInput.addEventListener("keyup", (event) => {
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

nameInput.addEventListener("keyup", () => {
  cardHolder.firstChild.nodeValue = nameInput.value;
});

cvcInput.addEventListener("keyup", () => {
  cvc.innerHTML = cvcInput.value;
});

function checkBlank() {
  if (this.value === "") {
    this.classList.add = "error";
    this.classList.contains("month")
      ? (dateError.style.display = "block")
      : (this.nextElementSibling.style.display = "block");
  } else {
    this.classList.contains("month")
      ? (dateError.style.display = "none")
      : (this.nextElementSibling.style.display = "none");
    this.classList.remove = "error";
  }
}

cvcInput.addEventListener("keydown", checkBlank);
year.addEventListener("keydown", checkBlank);

year.addEventListener("keydown", function () {
  document.querySelector(".yr").innerHTML = this.value;
});

month.addEventListener("keydown", checkBlank);

month.addEventListener("keydown", function () {
  document.querySelector(".mnth").innerHTML = this.value;
});
