"use strict";

/* select elements we need and store into variables */
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

/* remember that the for loop structure is declared let with a variable z*/
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

/* no parentheses because don't want to call function initially until 
after click s*/
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

/* Esc keyboard event */
/* given callback function a parameter -> we've called it e. We just define the object.
JavaScript - calls the function and will pass in keyboard event object as an argument */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    /* if modal doesn't contain hidden (with !) the modal needs to be closed. */
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
