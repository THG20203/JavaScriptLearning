/* can store booleans in variables */
let javascriptIsFun = true;
/* remember, variable declaration needs to happen before the log, because javascript is executed
from top to bottom */
console.log(javascriptIsFun);

/* typeof is an operator like + or - operator that we can use to the type of a value */
/* console.log typeof true -> will show new value in console, which is a string which is the typeof 
value */
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
/* need quotes for a string - otherwise reference error - because javascript sees it as a variable. 
JavaScript is looking for a variable that doesn't exist. We never declared a variable called Tristan */
console.log(typeof "Tristan");
