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
  /* the apples parameter at top will be a number once we call the function */
  const juice = `Juice with ${apples} apples`;
}

/* what we're doing above is using parameters - apples and oranges just as if 
they were normal variables, just inside the fruitProcessor function. */
