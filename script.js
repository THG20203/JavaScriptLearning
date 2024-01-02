/* note on highest precedence -> grouping ( .. ) */

/* grouping ( .. ) is just like parentheses -> works just like maths where operations
within parenthese are also executed first. 
Great example is to calculate the average of two values. Goign to add ageJonas and 
ageSarah back in as variables. */
/* ageJonas and ageSarah -> calculate the average age of these two people */
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

/* calculate average age -> don't forget descriptive age. averageAge -> describes exactly whast this 
variable will hold. To calculate average -> add two values together and divide by 2 (when have two 
variables). */
// const averageAge = ageJonas + ageSarah / 2;
/* notes -> what is going to happen? -> look at precedence table */
/* we have the division (15) happening before the subtraction (14). So what'll happen is 
age sarah will be divided by two, then ageJonas will be added */

/* start by logging their ages to the console. then after third comma we're evaluating theory 
above by adding averageAge to the console. */
console.log(ageJonas, ageSarah, averageAge);
/* averageAge in the console above is 55.5 which is result of ageSarah / 2 + ageJonas because of order
precedence with ageJonas being more important. 55.5 doesn't make any sense cause how can average
be larger than two ages which are 46 for ageJonas and 29 for ageSarah
is because:
19 / 2 = 9.5 (ageSarah / 2) 
then 9.5 + 46 (ageJonas) = 55.5 */

/* so we should make sure ageJonas + ageSarah operation is completed first. so put in 
parentheses cause it has highest precedence in javascript (21) as shown on the mdn docs. */
const averageAge = (ageJonas + ageSarah) / 2;
/* now result of this is an average of 32 */
