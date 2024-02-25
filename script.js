"use strict";

/* defining secret number to guess against outside of check button, 
cause only want to define it once when we start the application */
/* Math.random = 0 - 1 */
/* Math trunc -> get rid of any fractional digits */
/* + 1 to take it from 0 - 19 to 1 - 20 */
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low";
  }
});
