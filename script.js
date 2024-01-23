/* export functionality into another function -> like calcAge function.
Call one function inside of another function. */
/* So lets write another function expression */
/* don't worry about the birth year variable also being used in this function 
below. They are two different parameters or variables. */
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

/* we could even have a variable outside of the functions, could also be called
  birthYear */

/* re writing yearsTillRetirement function as regular function expression. */
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  /* take decision based on retirmenet value */
  if (retirement > 0) {
    return retirement;
    /* prove function exists if return statement is accurate and returned,
    a console.log below it will be ignored */
    console.log(`${firstName} retires in ${retirement} years.`);
  } else {
    /* In this case, if retirement is not greater than 0, the function will return -1.
    So, the purpose of returning -1 in the else block is to indicate that if retirement
    is not a positive value, it serves as a kind of "error" or "invalid" signal. */
    return -1;
    console.log(`${firstName} has already retired.`);
  }
};
console.log(yearsUntilRetirement(1997, "Tristan"));
console.log(yearsUntilRetirement(1950, "Mike"));
