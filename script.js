/* Another example of if/ else now lets create a variable conditionally and 
not just use console.log */
const birthYear = 2005;

/* create another variable called century, will contain century in which this person
was born. */

/* to make this work, need to define century outside if/ else block */
/* WHY? Any variable defined inside code block will not be accessible outside
of the block. So define century as empty, assign it values in the code blocks themselves. */
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
