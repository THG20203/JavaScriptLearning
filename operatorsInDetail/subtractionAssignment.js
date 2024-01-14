/* The subtraction assignment (-=) operator performs subtraction on the two operands
and assigns the result to the left operand. */
/* right to left */
let a = 2;

console.log((a -= 3));
// Expected output: -1
/* In this line, (a -= 3) is a compound assignment statement equivalent to a = a - 3. 
The value of a is decreased by 3, and the result (-1) is assigned back to a. 
Therefore, the output of console.log(a) is -1. */

console.log((a -= "Hello"));
// Expected output: NaN
/* In this line, (a -= "Hello") is attempting to subtract the string "Hello" 
from the current value of a. However, subtracting a string from a number 
is not a valid operation in JavaScript. The interpreter attempts to 
convert the string to a number, but since the conversion is not possible 
(as "Hello" is not a numeric string), it results in NaN (Not a Number). */
