/* The **exponentiation assignment (**=)** operator 
performs exponentiation on the two operands and assigns the result
 to the left operand. */
/* right to left */

let a = 3;

console.log((a **= 2));
// Expected output: 9
/* In this line, (a **= 2) is a compound assignment statement equivalent 
to a = a ** 2. It calculates the square of the current value of a (which is 3), 
and the result (9) is assigned back to a. Therefore, 
the output of console.log(a) is 9.*/

console.log((a **= 0));
// Expected output: 1
/* In this line, (a **= 0) is a compound assignment statement equivalent to 
a = a ** 0. Any number raised to the power of 0 is 1, so the value of a 
becomes 1. The output of console.log(a) is 1. */

console.log((a **= "hello"));
// Expected output: NaN
/* In this line, (a **= "hello") is attempting to raise the current 
value of a (which is 1 after the previous line) to the power of 
the string "hello". Since this operation is not well-defined 
(raising a number to the power of a non-numeric string), 
JavaScript tries to convert the string to a number. 
However, the conversion fails because "hello" is not a 
valid numeric string, resulting in NaN (Not a Number). */

/* So, the output of console.log(a) becomes NaN because the operation 
is not valid for the given types. It's important to ensure that 
mathematical operations are performed on appropriate types 
to avoid unexpected results. */
