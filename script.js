// Mathematical operator -> use minus operator to solve simple problem.
/* lets have a now const variable called now, assign current year 2037 to the now variable so don't 
have to repeat it */
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

/* other operators -> times and divide, two operators in console.log cause we can have 
more than one value in a console.log */
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// please note from above code -> 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

/* Another use case for plus operator -> join strings -> concatenate */
const firstName = "Tristan";
const lastName = "Griffiths";
/* to add a space? add empty string */
console.log(firstName + " " + lastName);

/* assignment operators. most simple is = operator */
let x = 10 + 5;
/* in the code above, the = is already an operator. In the code above, 
x will be assinged 15 because the + operator is executed before the assignment operator.
(This is based on operator precedence - which we'll explore shortly). */
