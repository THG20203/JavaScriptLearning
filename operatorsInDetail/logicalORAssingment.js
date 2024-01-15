/* The logical OR assignment (||=) operator only evaluates the right 
operand and assigns to the left if the left operand is falsy. */
const a = { duration: 50, title: "" };

a.duration ||= 10;
console.log(a.duration);
// Expected output: 50
/* Here, a is an object with a duration property set to 50. The ||= operator 
is the logical nullish assignment operator. It assigns the right-hand side 
(10) to the left-hand side (a.duration) only if the left-hand side is null 
or undefined. In this case, since a.duration is 50 (a truthy value), the 
assignment a.duration ||= 10; does not take place, and the value of a.duration 
remains 50. Therefore, the expected output is 50 when you log a.duration. */

a.title ||= "title is empty.";
console.log(a.title);
// Expected output: "title is empty"
/* In this case, a.title is an empty string (''). Since an empty string is 
considered a falsy value, the ||= operator will perform the assignment 
a.title ||= 'title is empty.';, resulting in a.title being assigned the 
value 'title is empty.'. Therefore, when you log a.title, the expected 
output is "title is empty.". */
