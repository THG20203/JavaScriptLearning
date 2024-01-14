/* The addition assignment (+=) operator performs addition (which is either numeric addition or 
    string concatenation) on the two operands and assigns the result to the left operand. */

let a = 2;
let b = "hello";

console.log((a += 3)); // Addition
// Expected output: 5
/* In this line, (a += 3) is an example of a compound assignment statement. 
It's equivalent to a = a + 3. The value of a is increased by 3, 
and the result (5) is assigned back to a. Therefore, the output of console.log(a) is 5. */

console.log((b += " world")); // Concatenation
// Expected output: "hello world"
/* In this line, (b += " world") is another compound assignment statement. 
For strings, the += operator performs string concatenation. 
It appends the string on the right (" world") to the existing value of b ("hello"), 
and the result ("hello world") is assigned back to b. Therefore, the 
output of console.log(b) is "hello world". */

// Summary
/* In summary, the += operator is used for compound assignment. 
It adds the value on the right to the variable on the left and assigns 
the result back to the variable. When used with a string variable, 
it concatenates the strings. */
