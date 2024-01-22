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
