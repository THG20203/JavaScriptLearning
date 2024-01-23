/* export functionality into another function -> like calcAge function.
Call one function inside of another function. */
/* So lets write another function expression */
/* don't worry about the birth year variable also being used in this function 
below. They are two different parameters or variables. */
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

/* we could even have a variable outside of the functions, could also be called
  birthYear */

/* re writing yearsTillRetirement function as regular function expression. */
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  return retirement;
  // return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement(1997, "Tristan"));
