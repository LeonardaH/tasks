// Create "More/Less" game with numbers.

// a) For each game a random number is automatically generated. The user should try to guess and enter a number between 1 and 100. He can try as long as he wants to. When he guesses correct, he wins the game.

// b) Add the More/Less functionality. For instance, if the generated number is 23, and the user inputs 27, he should see the sign "LESS". If he then enters 20 he should see the sign "MORE". If the users enters the correct number he should see a winning message!

// c) Limit the number of tries to 10 and count every try (render it in html)

// d) Add a play again button

// e) The user should be able also to click enter after entering the number to check if it's the correct one.

const input = document.querySelector(".numInput");
const button = document.querySelector(".guessButton");
const counter = document.querySelector("p");
const congo = document.querySelector("#congo");

const randomNum = Math.floor(Math.random() * 100 + 1);
console.log(randomNum);

let count = 0;

const game = () => {
  if (input.value == randomNum) {
    congo.style.display = "block";
    count++;
  } else if (input.value < 1 || input.value > 100) {
    alert("Only numbers between 1 and 100!");
  } else if (input.value < randomNum) {
    console.log("MORE");
    count++;
  } else if (input.value > randomNum) {
    console.log("LESS");
    count++;
  } else {
    console.log(input.value);
  }
  counter.innerText = `Number of guesses: ${count}`;

  input.value = "";
};

button.addEventListener("click", game);
