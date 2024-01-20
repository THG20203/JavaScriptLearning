/* Already saw two ways of writing conditionals - if/else statment, switch 
statement. Another one = conditional operator */
/* Conditional statement lets us write conditional statements -> all in one
line */
const age = 10;
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

/* the VALUE of drink its defined conditionally based on the condition above.
All in one simple line. */
/* Better than if statement -> cause if want to define variable inside 
if / else block, we need to declare variable outside */

/* For example in the code below, need to define drink2 variable outside 
of if / else block.
Any variable we define inside of a block is not available outside */
let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);
