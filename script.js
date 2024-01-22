/* Whats the difference function declaration and expressions?
Can call function declarations BEFORE they are defined in the code.
*/

// Function declaration
/* calling function BEFORE defined in the code */
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
