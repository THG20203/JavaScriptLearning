/* CHALLENGE 1 - instructions

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:
1. Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
2. Calculate both their BMIs using the formula, and store the results in two variables called 
BMIMark and BMIJohn.
3. Log the value of BMIMark and BMIJohn to the console.
4. BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a 
higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weighs 95 kg and is 1.88 m tall. John weighs 85 kg and is 1.76 m tall. */

/* part 1 - storing variables. Use let instead of const? Value susceptible to change especially
the mass. However, still decided to use const - use const by default */
/* TEST DATA 1 */
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
/* TEST DATA 2 */
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

/* part 2 - calculate mark and johns BMI's */
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
/* if BMI of Mark is higher than the BMI of John the result of the whole operator 
below will be true. Otherwise, it will be false. */
const markHigherBMI = BMIMark > BMIJohn;

/* part 3 - log results to console */
console.log(BMIMark, BMIJohn, markHigherBMI);

/* test data 1 BMIMark = higher than BMIJohn - 27.31 etc vs 24.19 
markHigherBMI -> we expect this one to be true, and console.log does indeed say true. */

/* test data 2 BMIJohn = higher than BMIMark - 27.44 etc vs 26.88 
markHigherBMI -> we expect this one to be false, and console.log does indeed say false */
