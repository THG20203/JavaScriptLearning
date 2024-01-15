const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

/* write if else statement - could have written markHigherBMI, but more
common to write condition directly in parentheses. */
if (BMIMark > BMIJohn) {
  /* using template literals -> include BMI values in the output */
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}

/* see as a result of if statement in the console:
John's BMI is higher than Mark's */

/* this gave me - 
console.log(BMIMark, BMIJohn);
26.87 and 27.44
so Johns BMI is higher. */
