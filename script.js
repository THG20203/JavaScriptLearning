/* pretty simple way of getting a value from a web page -> prompt function */
/* we need to store this value somewhere - hence const favourite -> console.log */
const favourite = prompt("What's your favourite number?");
console.log(favourite); // logs the value you input in the prompt as a string
// see that in typeof
console.log(typeof favourite); // will equal string

/* use lose equality operator initially, will do type coercion. */
if (favourite == 23) {
  // "23" == 23
  console.log("Cool! 23 is an amazing number");
}
