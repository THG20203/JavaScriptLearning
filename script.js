/* Third type of function -> arrow function. Special type of function
expression -> shorter and therefore faster to write. */

/* Get function declaration up as comparison */
const age1 = calcAge1(1991);
function calcAge1(birthYear) {
  return 2024 - birthYear;
}

/* Get function expression up as a comparison */
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = calcAge1(1997);

/* Writing an arrow function */

/* write birthYear -> then write arrow, then write what I want to return
i.e. 2024 - birthYear */
/* to use function? -> store it in variable -> const calcAge3 =  */
const calcAge3 = (birthYear) => 2024 - birthYear;

/* Arrow function = special form of function expression */
