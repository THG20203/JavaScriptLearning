/* The division assignment (/=) operator performs division on the 
two operands and assigns the result to the left operand. */
let a = 3;

a /= 2;
console.log(a);
// Expected output: 1.5
/* In this line, a /= 2 is a compound assignment statement equivalent 
to a = a / 2. It divides the current value of a (which is 3) by 2, 
and the result (1.5) is assigned back to a. Therefore, the 
output of console.log(a) is 1.5. */

a /= 0;
console.log(a);
// Expected output: Infinity
/* In this line, a /= 0 is a compound assignment statement equivalent to 
a = a / 0. Dividing a number by zero in JavaScript results in Infinity. 
Therefore, the value of a becomes Infinity, and the output of 
console.log(a) is Infinity. */

a /= "hello";
console.log(a);
// Expected output: NaN
