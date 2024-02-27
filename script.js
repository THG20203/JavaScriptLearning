// Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

/* define currentSocre outside the dice roll function,
cause otherwise would be set to 0 each time we click button. */
let currentScore = 0;
/* first player is 0 cause will store scores in an array */
let activePlayer = 0;
const scores = [0, 0];

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generating a random dice roll
  /* variable for dice rolls - not a global variables cause
  each time we roll dice want to generate a new number */
  /* const dice is producing a number */
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceEl.classList.remove("hidden");
  /* write string name of the dice image to be shown using template literal */
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: if true, go to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice; // same as currentScore = currentScore + dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    /* before we switch player, need to set text of activePlayer back to 0 */
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // Switch to next player
    /* if activePLayer is 0, switch to 1, else should be 0 */
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
  }
});
