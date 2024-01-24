/* Functions three different tyoes */
/* declaration - function that can be used before declared. */
function calcAge(birthYear) {
  return 2037 - birthYear;
}
/* expression - essentially function values stored in variable */
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

/* arrow - great for quick one line functions. No arrow (more later). */
const calcAge = (birthYear) => 2037 - birthYear;

/* three different ways of writing functions, but all work in similar way:
input data, transform data, output data */

/* structure of common function */
function calcAge(birthYear, firstName) {
  const age = 2037 - birthYear;
  console.log(`${firstName} is ${age} years old`);
  return age;
}
const age = calcAge(1991, "Jonas");
