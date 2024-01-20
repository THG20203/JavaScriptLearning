/* Already saw two ways of writing conditionals - if/else statment, switch 
statement. Another one = conditional operator */
/* Conditional statement lets us write conditional statements -> all in one
line */
const age = 13;
/* Condition - is age at least 18. */
/* Then ? mark -> if block. Code we want to be executed in
case condition is true */
/* Then : */
age >= 18;
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

/* Ternary Operator -> can assign value to variable. So with ternary operator, 
can conditionally declare variables */
/* So more likely examplev -> returning values: */
const drink = age >= 18 ? "wine" : "water";
console.log(drink);
