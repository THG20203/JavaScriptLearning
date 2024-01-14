/* assignment - right to left*/
x = y;
/* In this assignment, the value of y is assigned to the variable x. This operation follows 
a right-to-left direction, meaning the value on the right side (y) is assigned to the 
variable on the left side (x). */

let x = 2;
const y = 3;

console.log(x);
// Expected output: 2
/* Line 4 initializes a variable x with the value 2. 
The console.log(x) statement outputs the current value of x, which is 2. */

console.log((x = y + 1)); // 3 + 1
// Expected output: 4
/* Here, the expression (x = y + 1) assigns the value of y + 1 to the variable x. 
So, x is updated to 3 + 1, which is 4. 
The console.log() statement then outputs the result, 
which is the updated value of x. */

console.log((x = x * y)); // 4 * 3
// Expected output: 12
/* In this line, the expression (x = x * y) assigns the result of x * y to the 
variable x. At this point, x is 4 (the updated value from the previous line), 
and y is 3. So, x is further updated to 4 * 3, which is 12. The console.log() 
statement then outputs the result, which is the new value of x. */
