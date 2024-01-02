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
const averageAge = ageJonas + ageSarah / 2;
/* notes -> what is going to happen? -> look at precedence table */
/* we have the division (15) happening before the subtraction (14). So what'll happen is 
age sarah will be divided by two, then ageJonas will be added */

/* start by logging their ages to the console. then after third comma we're evaluating theory 
above by adding averageAge to the console. */
console.log(ageJonas, ageSarah, averageAge);
