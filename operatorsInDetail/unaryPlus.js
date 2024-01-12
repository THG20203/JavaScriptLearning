/* The unary plus (+) operator precedes its operand and evaluates to its 
operand but attempts to convert it into a number, if it isn't already. */
const x = 1;
const y = -1;

console.log(+x);
// Expected output: 1
// The unary plus converts the numeric value 1 to a number. No change.

console.log(+y);
// Expected output: -1
// The unary plus converts the numeric value -1 to a number. No change.

console.log(+"");
// Expected output: 0
// The unary plus converts an empty string to 0.

console.log(+true);
// Expected output: 1
// The unary plus converts the boolean value true to the numeric value 1.

console.log(+false);
// Expected output: 0
// The unary plus converts the boolean value false to the numeric value 0.

console.log(+"hello");
// Expected output: NaN
// The unary plus tries to convert the non-numeric string 'hello' to a number, resulting in NaN (Not a Number).
