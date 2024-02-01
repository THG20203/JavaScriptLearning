/* Array methods -> array operations */
const friends = ["Michael", "Tristan", "Sam"];
// push method -> add elements onto end of array
friends.push("Jay");
/* push is a function - see that by parenthese. Its a function we call, function 
attached to the friends array itself. hence '.' */
console.log(friends); // (4) ["Michael", "Tristan", "Sam", "Jay"]

/* Push is a method, technically a function and we call it on the friends array
in the example friends.push("Jay") */

/* push() function returns a value -> thats the length of the new array.
So if want to capture that value -> can create new variable.  */
const newLength = friends.push("Jay");
console.log(newLength); // get the value 5 in the console
