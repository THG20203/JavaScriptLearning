/* The nullish coalescing assignment (??=) operator, also known as the logical 
nullish assignment operator, only evaluates the right operand and assigns to the 
left if the left operand is nullish (null or undefined). */
const a = { duration: 50 };

a.duration ??= 10;
console.log(a.duration);
// Expected output: 50
/* Here, a is an object with a duration property set to 50. The ??= operator 
is the nullish coalescing assignment operator. It assigns the right-hand side 
(10) to the left-hand side (a.duration) only if the left-hand side is null 
or undefined. In this case, since a.duration is 50 (a truthy value),
the assignment a.duration ??= 10; does not take place, and the value of 
a.duration remains 50. Therefore, the expected output is 50 when you log 
a.duration. */

a.speed ??= 25;
console.log(a.speed);
// Expected output: 25
/* In this case, a.speed is undefined. The ??= operator checks if the 
left-hand side is null or undefined. Since a.speed is undefined, the 
assignment a.speed ??= 25; takes place, and a.speed is assigned the 
value 25. Therefore, when you log a.speed, the expected output is 25. */
