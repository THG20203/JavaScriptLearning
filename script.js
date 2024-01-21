/* Lets explore functionality of functions */
/* When we write functions - we pass data into a function, functions can 
return data too. Can give us data back -> use for something else in the program. */

/* in function below we also express something called parameters. Parameters 
are like variables that are specific to this function. They will get defined once
we call the function. */
/* apples and oranges will be defined once the function is CALLED */
/* apples and oranges represent the input data of this function */
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  /* do something -> simulate - fruit processor does something with apples and oranges 
  fruit processor produces a juice out of apples and oranges we give it */
  /* Creating string that does that, variable called juice, then template literal
  then using the apples parameter here. */
  /* the apples parameter in parameters will be a number once we call the function, 
  oranges too. */
  /* we've built a string based on input data we get into the function. */
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  /* with return keyword, can return any value from the function. This value can
  be used later anywhere in our code. */
  return juice;
}

/* Lets call / run / invoke the fruit processor function. Then in parameters, specifying
values for apples and oranges. */
/* 5 and 0 are inputs of fruit processor function. */
fruitProcessor(5, 0);

/* function fruitProcessor(apples, oranges) { - think of apples and oranges parameters
like empty spaces we still need to fill out, when writing a function. */

/* When we call function later in code fruitProcessor(5, 0);, we fill in blank spaces,
by passing in the real specific values, which will then get assigned to the parameters. */

/* 5, 0 -> actual values of parameters are called arguments. */

/* what we're doing above is using parameters - apples and oranges just as if 
they were normal variables, just inside the fruitProcessor function. */
