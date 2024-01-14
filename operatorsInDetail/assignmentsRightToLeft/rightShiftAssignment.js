/* The right shift assignment (>>=) operator performs right shift on the 
two operands and assigns the result to the left operand. */
let a = 5; //  00000000000000000000000000000101

a >>= 2; //  00000000000000000000000000000001
console.log(a);
// Expected output: 1

let b = -5; //  11111111111111111111111111111011
/* Initial value of a in binary: 00000000000000000000000000000101 (5 in decimal). */

b >>= 2; //  11111111111111111111111111111110
/* The << operator performs a left shift by 2 positions, resulting in: 
00000000000000000000000000010100 (20 in decimal). */
console.log(b);
// Expected output: -2
