/* Another example of if/ else now lets create a variable conditionally and 
not just use console.log */
const birthYear = 1991;

/* create another variable called century, will contain century in which this person
was born. */

/* to make this work, need to define century outside if/ else block */
/* WHY? Any variable defined inside code block will not be accessible outside
of the block. */
if (birthYear <= 2000) {
  let century = 20;
} else {
  let centruy = 21;
}
console.log(century);
/* Proof of issue with defining variables inside of code block console.log produces
Uncaught ReferenceError: century is not defined */
