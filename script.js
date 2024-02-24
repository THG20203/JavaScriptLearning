"use strict";

/* Lets make application do something when click on check button */
/* First time our code reacts to something that happened in the DOM. For 
this, use event listener. */
/* Event = something that happens on the page. Mouse move, key press etc. */
/* Event listener - wait for event to happen then react to it. */

/* To listen for events, first need to select event where the event 
should happen. */

/* So, in guess my number - want to listen to event on check button. This is where the 
click that I'm interested in will happen. */
/* so selecting element with class check */
/* on check element, addEventListener. */

/* In addEventListener, first pass in type of event. - this case click. */
/* Second argument - tell eventListener what to do. Do that by specifying a function. */
/* Function will contain code that should be executed when click event happens -> 
its called the event handler. */
document.querySelector(".check").addEventListener("click", function () {
  /* in function argument body, specify what should happen */
});

/* Conceptually, remember a function is just a value. If a function is just a value, we
can pass it into another function as an argument. Like any other value, like a string or number. */
