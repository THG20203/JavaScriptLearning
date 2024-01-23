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

/* arrow functions -> return happens implicitly */

/* save return value into variable */
const age3 = calcAge3(1991);
console.log(age3);

/* another more complex arrow function */
/* How many years a person has left until retirement? */
/* passing in birthYear. But to calculate based on birthYear alone, first
need to calculate age, retirement age - currentAge. */
const yearsUntilRetirement = (birthYear) => {
  const currentAge = 2024 - birthYear;
  /* give us how many years we have left */
  const retirement = 65 - currentAge;
  /* to return retirement, need to write return keyword explicitly. We can 
  only ommit return if have one line function. */
  return retirement;
};
/* could assign answer to variable, but instead console.log */
console.log(yearsUntilRetirement(1997)); // 38 years
