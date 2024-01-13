/* The unary negation (-) operator precedes its operand and negates it. */
const x = 4;
const y = -x;

console.log(y);
// Expected output: -4

/* In this case, the variable x is assigned the value 4. The expression -x 
applies the unary negation to x, resulting in the value -4. 
Therefore, the output of console.log(y) is -4. */

const a = "4";
const b = -a;

console.log(b);
// Expected output: -4

/* Here, the variable a is assigned the string value "4". When the unary
negation is applied to a string, JavaScript attempts to convert the string 
to a numeric value before negating it. In this case, the string "4" 
is converted to the numeric value 4, and then the negation is applied, 
resulting in -4. Therefore, the output of console.log(b) is -4. */

/* In summary, when the unary negation operator (-) is used on a numeric 
variable, it negates the value. When used on a string that represents 
a numeric value, JavaScript converts the string to a number before 
applying the negation. */
