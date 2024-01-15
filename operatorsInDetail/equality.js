/* The equality (==) operator checks whether its two operands are equal, returning a 
Boolean result. Unlike the strict equality operator, it attempts to 
convert and compare operands that are of different types. */
console.log(1 == 1);
// Expected output: true
/* In this case, the expression 1 == 1 is checking if the value on the left (1) 
is equal to the value on the right (1). Since both values are numerically equal, 
the result of the equality comparison is true. Therefore, the expected 
output is true. */

console.log("hello" == "hello");
// Expected output: true
/* The expression 'hello' == 'hello' is comparing two string values. Since 
both strings are identical ('hello' is not different from 'hello'), 
the result of the equality comparison is true. The expected output is true. */

console.log("1" == 1);
// Expected output: true
/* Here, the expression is comparing a string ('1') to a number (1). 
JavaScript performs type coercion in this case, converting the string 
to a number before making the comparison. Since the values are numerically 
equal after coercion, the result is true. The expected output is true. */

console.log(0 == false);
// Expected output: true
/* In this example, the expression is comparing the number 0 to the boolean 
value false. JavaScript performs type coercion, and both 0 and false are 
considered falsy values. Therefore, the result of the equality comparison 
is true. The expected output is true. */
