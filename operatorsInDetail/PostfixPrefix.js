/* Increment ++ operator (adds one to) its operand and returns a value before or 
after the increment, depending on where the operator is placed. */
/* Postfix increment */
let x = 3;
const y = x++;
// x is 4; y is 3

/* In the postfix increment (x++), the current value of the variable x is used (assigned to y), 
AND THEN x is incremented. So, after this operation, x becomes 4, and y holds the original 
value of x, which is 3. */

/* Prefix increment */
let a = 3;
const b = ++a;
// a is 4; b is 4

/* In the prefix increment (++a), the variable a is incremented first, and then the updated 
value is used (assigned to b). So, after this operation, both a and b hold the value 4. */
