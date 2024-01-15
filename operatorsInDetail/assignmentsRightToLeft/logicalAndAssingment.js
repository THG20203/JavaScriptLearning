/* The logical AND assignment (&&=) operator only evaluates the right 
operand and assigns to the left if the left operand is truthy. */
/* right to left */
let a = 1;

a &&= 2;
console.log(a);
// Expected output: 2
/* Here, a is a variable, and &&= is the logical AND assignment operator. 
The logical AND assignment operator performs a logical AND operation 
between the variable on the left-hand side (a) and the value on the 
right-hand side (2 in this case). If the left-hand side is truthy, 
it assigns the value on the right-hand side to the variable. If the 
left-hand side is falsy, it leaves the variable unchanged. */

/* Yes, the &&= operator is evaluated from right to left. This means 
that the expression a &&= 2; is equivalent to a = a && 2;. */
