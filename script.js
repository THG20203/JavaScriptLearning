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

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. 
TEST DATA 2: John weighs 92 kg and is 1.95 m tall. */

/* part 1 - storing variables. Use let instead of const? Value susceptible to change especially
the mass. However, still decided to use const - use const by default */
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

/* part 2 - calculate mark and johns BMI's */
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

/* part 3 - log results to console */
console.log(BMIMark, BMIJohn);
/* BMIMark = higher than BMIJohn - 27.31 etc vs 24.19 */
