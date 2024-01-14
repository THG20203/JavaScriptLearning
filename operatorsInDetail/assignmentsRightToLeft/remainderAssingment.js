/* The remainder assignment (%=) operator performs remainder on the two 
operands and assigns the result to the left operand. */
/* right to left */
let a = 3;

console.log((a %= 2));
// Expected output: 1
/* In this line, (a %= 2) is a compound assignment statement equivalent
to a = a % 2. It calculates the remainder when the current value 
of a (which is 3) is divided by 2, and the result (1) is assigned 
back to a. Therefore, the output of console.log(a) is 1. */

console.log((a %= 0));
// Expected output: NaN
/* In this line, (a %= 0) is attempting to calculate the remainder 
when the current value of a (which is 1 after the previous line) is 
divided by 0. However, dividing by zero is not a valid operation in 
JavaScript, and the result of such an operation is NaN (Not a Number). 
Therefore, the value of a becomes NaN, and the output of 
console.log(a) is NaN. */

console.log((a %= "hello"));
// Expected output: NaN
/* In this line, (a %= 'hello') is attempting to calculate the 
remainder when the current value of a (which is NaN after the 
previous line) is divided by the string 'hello'. Performing
the modulo operation on a non-numeric value results in NaN. So, 
the value of a remains NaN, and the output of console.log(a) 
is still NaN. */
