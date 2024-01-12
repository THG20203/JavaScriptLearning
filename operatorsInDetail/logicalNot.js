/* The logical NOT (!) (logical complement, negation) operator takes truth to falsity and vice versa.
It is typically used with boolean (logical) values. When used with non-Boolean values, it 
returns false if its single operand can be converted to true; otherwise, returns true. */

const a = 3;
const b = -2;

console.log(!(a > 0 || b > 0));
// Expected output: true
/* The logical NOT (!) negates the result of the condition. Since the condition (a > 0 || b > 0) 
evaluates to false, the ! negates it to true. */
