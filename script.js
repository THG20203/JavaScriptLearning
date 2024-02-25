"use strict";

/* SECRET NUMBER VARIABLE */
/* defining secret number to guess against outside of check button, 
cause only want to define it once when we start the application */
/* Math.random = 0 - 1 */
/* Math trunc -> get rid of any fractional digits */
/* + 1 to take it from 0 - 19 to 1 - 20 */
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

/* SCORE VARIABLE */
/* Better way than reading score and changing it is creating a varaible, then updating
that variable (decreasing it) then displaying it in score label. Good to have variable in 
code and not just in the DOM. */
/* let score 20 start at 20, make it a let so can decrease */
let score = 20;

/* GUESS BUTTON CLICK LOGIC */
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high";
    /* Cause score is wrong (too high) - decrease it */
    score--;
    /* Make sure the score changes on screen as a guess is too high */
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low";
    /* Cause score is wrong - decrease it */
    score--;
  }
});
