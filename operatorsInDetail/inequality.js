console.log(1 != 1);
// Expected output: false
/* In this case, the expression 1 != 1 is checking if the value on the 
left (1) is not equal to the value on the right (1). Since 1 is 
equal to 1, the result of the inequality is false. Therefore, the 
expected output is false. */

console.log("hello" != "hello");
// Expected output: false
/* Similarly, the expression 'hello' != 'hello' is comparing two string values. 
Since both strings are identical ('hello' is not different from 'hello'), 
the result of the inequality is false. The expected output is false. */

console.log("1" != 1);
// Expected output: false
/* Here, the expression is comparing a string ('1') to a number (1). JavaScript 
performs type coercion in this case, converting the string to a number 
before making the comparison. Since the values are numerically equal, 
the result is false. The expected output is false. */

console.log(0 != false);
// Expected output: false
/* In this example, the expression is comparing the number 0 to the boolean 
value false. JavaScript performs type coercion, and both 0 and false are considered 
falsy values. Therefore, the result of the inequality is false. The expected 
output is false. */
