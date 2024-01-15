/* The conditional (ternary) operator is the only JavaScript 
operator that takes three operands: a condition followed 
by a question mark (?), then an expression to execute if the 
condition is truthy followed by a colon (:), and finally the 
expression to execute if the condition is falsy. This operator 
is frequently used as an alternative to an if...else statement. */
function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

/* This function returns '$2.00' if isMember is truthy 
(evaluates to true) and '$10.00' if isMember is falsy 
(evaluates to false). */

console.log(getFee(true));
// Expected output: "$2.00"
/* When you call getFee(true), isMember is true, so the 
function returns '$2.00'. The expected output is "$2.00". */

console.log(getFee(false));
// Expected output: "$10.00"
/* When you call getFee(false), isMember is false, so the 
function returns '$10.00'. The expected output is "$10.00". */

console.log(getFee(null));
// Expected output: "$10.00"
/* When you call getFee(null), null is falsy, so the function 
returns '$10.00'. The expected output is "$10.00". */
