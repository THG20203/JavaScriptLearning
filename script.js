/* In practice, conversion to turthy / falsy is implicit so in other words, */
/* when does javascript do type coercion to booleans? two scenarios:
logical operators
logical context -> i.e. condition of if / else statement
*/

/* Lets see how type coercion works in if / else statement */
const money = 0;

/* Does the person currently have any money or not */
/* money is number -> and its 0 -> javascript will try and convert it into a boolean,
using truthy and falsy value. 0 is falsy value */
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job!");
}

/* another use case -> truthy and falsy values = check if variable is defined or not */
let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

/* result will be the else block -> Height is UNDEFINED */
/* height is undefined cause didn't assign value. undefined is falsy value so goes to 
else block. height is converted to a boolean and height is undefined. */
