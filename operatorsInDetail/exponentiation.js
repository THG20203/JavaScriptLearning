/* The **exponentiation (**)** operator returns the result of raising the 
first operand to the power of the second operand. It is equivalent to Math.pow() */

console.log(3 ** 4);
// Expected output: 81
/* This expression calculates 3 raised to the power of 4. 
So, it's equivalent to 3 * 3 * 3 * 3, which equals 81. */

console.log(10 ** -2);
// Expected output: 0.01
/* Here, it calculates 10 raised to the power of -2. 
This is equivalent to 1 / (10 * 10), which is 0.01. */

console.log(2 ** (3 ** 2));
// Expected output: 512
/* This expression involves nested exponentiation. 
First, it calculates 3 raised to the power of 2 (3 ** 2), 
which is 9. Then, it calculates 2 raised to the power of 9 (2 ** 9), 
resulting in 512. */

console.log((2 ** 3) ** 2);
// Expected output: 64
/* In this case, it first calculates 2 raised to the power of 3 
(2 ** 3), which is 8. Then, it raises 8 to the power of 2 (8 ** 2), 
resulting in 64. */
