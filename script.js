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
/* 1. usually function needs a function name => i.e calcAge */
/* 2. Then function has parameters -> recieve input values. Like local 
variables of a function. */
/* 3. Function body: block of code that we want to reuse. Processes the
function's input data. */
/* 4. return statement - block of code that we want to re use. Processes 
the function's input data. 
Also -> return statement to output a value from the function and 
terminate execution. */
function calcAge(birthYear, firstName) {
  const age = 2037 - birthYear;
  /* console.log is just another function call inside calcAge function */
  console.log(`${firstName} is ${age} years old`);
  return age;
}
/* 5. Calling, running or invoking the function using () */
/* 6. Arguments inside () - actual values of function parameters, to input 
data */
/* 7. Variable to save returned value (function output) */
const age = calcAge(1991, "Jonas");
