/* Array methods -> array operations */
const friends = ["Michael", "Tristan", "Sam"];

/* ADD ELEMENTS */
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

friends.unshift("John");
/*  The unshift method is used to add one or more elements to the beginning
of an array. */
console.log(friends); // (5) ["John", "Michael", "Steven", "Peter", "Jay"]
/* unshift also returns value -> length of array */

/* REMOVE ELEMENTS */
/* pop is opposite to push -> so remove last element of the array */
/* Don't need to pass an argument, cause no information needed to take off last 
element of an array. */
friends.pop();

/* pop method also returns something but not length of new array,
but instead it returns the removed element. */
const popped = friends.pop();
console.log(popped); // Last element (Jay) saved into popped

friends.shift(); // Takes element off the start rather than end like pop() does
