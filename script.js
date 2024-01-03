/* Strings - easy way to build them = template literal */
/* new variables - to later be concatenated  - build a string. */
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;

/* going to use the string to create sentence. 'Hi I'm Jonas a 30 year old teacher.
Then use the birthYear to calculate the age */

/* calculating age from this year variable */
const year = 2037;

/* use + sign to concatenate strings */
const jonas = "I'm " + firstName + ", a " + (year - birthYear);
