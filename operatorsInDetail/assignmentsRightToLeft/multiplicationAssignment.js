/* The multiplication assignment (*=) operator performs multiplication 
on the two operands and assigns the result to the left operand. */
/* right to left */
let a = 2;

console.log((a *= 3));
// Expected output: 6
/* In this line, (a *= 3) is a compound assignment statement equivalent 
to a = a * 3. It multiplies the current value of a (which is 2) by 3, 
and the result (6) is assigned back to a. Therefore, the output 
of console.log(a) is 6. */

console.log((a *= "hello"));
// Expected output: NaN
/* In this line, (a *= "hello") is attempting to multiply the 
current value of a (which is 6 after the previous line) by 
the string "hello". Multiplying a number by a non-numeric 
string is not a valid operation in JavaScript. The interpreter 
tries to convert the string to a number, but since the 
conversion is not possible (as "hello" is not a numeric string), 
it results in NaN (Not a Number). */
