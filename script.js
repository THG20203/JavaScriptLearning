/* pretty simple way of getting a value from a web page -> prompt function */
/* we need to store this value somewhere - hence const favourite -> console.log
/* number converter */
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite); // logs the value you input in the prompt as a string
// see that in typeof
console.log(typeof favourite); // will equal string

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

/* theres a operator for different -> if number is not 23 */
/* !== is strict version */
if (favourite !== 23) console.log("Why not 23?");
