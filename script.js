/* Function Declarations */
/* Simply use the function keyword to declare function, bit like we declare varaibles */

/* function calculate age based on given birth year */
/* persons birthYear = input of function. Whats an input? Parameter in function. Parameter
is like local variable only available inside of function. */
function calcAge1(birthYear) /* then function body with curly braces */ {
  /* now code we want to create - calculate age. Current year - birthYear */
  const age = 2024 - birthYear;
  /* calculate age then return that value */
  return age;
}

const tristanAge = calcAge1(1997);
console.log(tristanAge);
