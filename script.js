function fruitProcessor(apples, oranges) {
  /* all we want to do is produce juice and return it from the function */
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

/* calling function again. 2 and 4 are specific arguments -> will get passed 
into the function as parameters. */
/* apples and oranges are the blank spaces. Then when we call function, we fill in
these blank spaces. */
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

/* we should call functions at least once otherwise code in functions will never
be executed. Without calling function, it is useless. */

/*-----------------------------------------------------------------------------*/

/* logger function -> don't have any parameters, so when call function, don't specify 
any arguments. */
function logger() {
  /* note in this function nothing is returned. Not all functions return something, not all 
    functions need to accept parameters like fruit processor. */
  console.log("My name is Jonas");
  /* function without parameters or return only really use when there is a block of code we 
  want to use over and over */
}

/* this function doesn't return anything, all it does is log something to the console.
It doesn't return a value cause it doesn't return a value */
/* This is why we don't save anything to a variable cause no return, no value, nothing
to add to a variable */
logger();
