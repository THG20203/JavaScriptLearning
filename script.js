"use strict";

/* SECRET NUMBER VARIABLE */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
/* SCORE VARIABLE */
let score = 20;
/* HIGHSCORE VARIABLE */
let highscore = 0;

/* REFACTOR FUNCTIONS */
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const guessNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

/* GUESS BUTTON CLICK LOGIC */
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When no input
  if (!guess) {
    displayMessage("No number");
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number");
    guessNumber(secretNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      displayMessage(guess > secretNumber ? "Too high" : "Too low");
    } else {
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }

  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage("Start guessing..");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
  });
});
