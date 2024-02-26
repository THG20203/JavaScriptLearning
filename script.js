"use strict";

/* select elements we need and store into variables */
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

/* remember that the for loop structure is declared let with a variable z*/
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

/* no parentheses because don't want to call function initially until 
after click s*/
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
