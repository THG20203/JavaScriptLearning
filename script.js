/* Function Declarations */
/* Simply use the function keyword to declare function, bit like we declare varaibles */

/* function calculate age based on given birth year */
/* persons birthYear = input of function. Whats an input? Parameter in function. Parameter
is like local variable only available inside of function. */
function calcAge1(birthYear) /* then function body with curly braces */ {
  /* now code we want to create - calculate age. Current year - birthYear */
  /* can just return age calculation. Dry principle - don't need age variable. */
  return 2024 - birthYear;
}

/* calling value of parameter -> the ARGUMENT 1997 */
/* const tristanAge -> capturing value into variable */
const tristanAge = calcAge1(1997);
console.log(tristanAge);

/*---------------------------------------------------------------------------------------*/
/* Function Expression */
/* write function without a name, then still define parameter, function body,
BUT then store it all into a variable. That variable will then be the function. */
/* function without a name -> anonymous function */
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
/* in function expression above everything in the fucntion to the right of the 
= is an expression. Remember expression produces a value. Use that value, store
it into calcAge2. This will then be the function. */

/* to call function, we do it in same way */
const age2 = calcAge2(1991);
console.log(age2);
