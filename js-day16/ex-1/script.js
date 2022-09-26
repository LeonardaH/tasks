// create a flag quiz game. The basic playground and rules of the game are
// simple:

// • Slot for the flag image
// • Input field where the player needs to guess which country is it
// • Part of the screen where the result is presented (did the user guess the
// correct country)
// • Play again button

const container = document.getElementById("container");
let flagContainer = document.querySelector(".flag");
const input = document.querySelector(".user-guess");
const submit = document.getElementById("submit");
const resetBtn = document.querySelector(".btn");
const result = document.querySelector(".result");
const image = document.querySelector("img");
const skipBtn = document.getElementById("skip");
const next = document.querySelector(".next");
const skipCount = document.getElementById("skipCount");

const countries = [
  "Afghanistan",
  "Albania",
  "Croatia",
  "Cuba",
  "Greece",
  "Italy",
  "Latvia",
  "Montenegro",
  "Romania",
  "Serbia",
];

let player = 0;
let computer = 0;
let counter = 3;

let random = Math.floor(Math.random() * countries.length);
let country = countries[random];
console.log(country);

const getFlag = async () => {
  const api = `https://countryflagsapi.com/png/${country}`;
  const response = await fetch(api);
  console.log(response);
  image.src = `${response.url}`;
};

const checkInput = () => {
  submit.setAttribute("disabled", "disabled");
  if (country.includes(input.value)) {
    result.textContent = "Good job! You won";
    player++;
    console.log("player score:" + player + " computer score:" + computer);
  } else {
    result.textContent = "Wrong country... :(";
    computer++;
    console.log("computer score:" + computer + " player score:" + player);
    input.setAttribute("disabled", "disabled");
  }
  next.removeAttribute("hidden");

  getWinner();
};

const getWinner = () => {
  if (player === 5) {
    result.innerHTML = "";
    const message = `
      <p>Congrats! You won</p>    
    `;
    result.insertAdjacentHTML("beforeend", message);
    player = 0;
  } else if (computer === 5) {
    result.innerHTML = "";
    const message = `
      <p class="mes">Sorry! You lost!</p>    
    `;
    result.insertAdjacentHTML("beforeend", message);
    computer = 0;
  }
};

const resetGame = () => {
  document.location.reload();
};

const newRound = () => {
  submit.removeAttribute("disabled");
  random = Math.floor(Math.random() * countries.length);
  image.src = `https://countryflagsapi.com/png/${countries[random]}`;
  input.value = "";
  result.textContent = "";
  input.removeAttribute("disabled");
};

getFlag();

submit.addEventListener("click", checkInput);
resetBtn.addEventListener("click", resetGame);
skipBtn.addEventListener("click", () => {
  if (counter >= 0) {
    newRound();
    skipCount.textContent = counter--;
  } else {
    console.log("No more skips left");
  }
});
next.addEventListener("click", newRound);
