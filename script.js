/* Strings - easy way to build them = template literal */

/* FIRST look at strings independently */
/* new variables - to later be concatenated  - build a string. */
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;

/* going to use the string to create sentence. 'Hi I'm Jonas a 30 year old teacher.
Then use the birthYear to calculate the age */

/* calculating age from this year variable */
const year = 2037;

/* use + sign to concatenate strings */
/* need to put year - birthYear between parentheses -> so will do the calculation first, and then 
the concatenation. */
const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
/* result of (year - birthYear) will be a number -> rest of what we're adding is strings so how are
is this going to work? type coercion. */
/* javascript convert number to string so it can concatenate them, join them with rest of string. */
console.log(jonas);

/* Since ES6 -> have much better tool for doing this -> template literals. With template literals
can write a string more normal way -> then basically insert variables directly into string. */

/* SECOND look at template literals */
/* template literal -> use backticks to tell javascript we're writing a string -> backticks above 
'tab' on the keyboard */
/* now write string and insert variables in there with ${variablename}. We can also write any 
javascript inside of ${} */
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
/* logging to console to test */
console.log(jonasNew);
