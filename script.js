/* create variable called friends, with []. In here we can put 
different values seperated by commas. */
/* Format should be "String", so string then comma and then another value. */
const friends = ["Michael", "Steven", "Peter"];

/* Array can hold as many values as we want and values of any type.
Doesn't have to be strings, numbers work just the same. */

/* Arrays are 0 based - first element is number 0 */
console.log(friends[0]);
console.log(friends[2]);

/* work out how long the array is? friends.length. length is a property, 
something we're going to talk about later in section when talk about objects.
'length' property is NOT 0 based, so won't be 2 even though 'Peter' is element
2 as arrays in JavaScript are 0 indexed. */
/* length will literally give us the number of elements in the array */
/* below should log 3. */
console.log(friends.length);

/* Can use this to automatically get last element of any array */
/* remember, friends.length is not 0 based, so friends.length is 3, but the last
element 'Peter' is 2 - as per the 0 indexed array */
console.log(friends[friends.length - 1]);

/* what the above also shows -> can put any expression inside of bracket. Not just number
can be an expression like 'friends.length - 1'. Remember an expression produces a value. 
Remember can't put a statement between [] */

/* friends.length - 1 will be 3 - 2 */
