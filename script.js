const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

/* Comparison Operators used to produce boolean values. */
/* The boolean below will produce true cause Jonas is older than Sarah 
-> 2037 - 1991 vs 2037 - 2018 */
/* below -> asking operator - is age of jonas greater than age of Sarah. 
Operator will reply with yes (true) or no (false). */
console.log(ageJonas > ageSarah);

/* > greater */
/* < less than */
/* >=, greater equal */
/* <= less than equal */

/* greator equal application */
/* testing if sarah is of full age - she must be at least 18 */
/* She needs to be greater than 18 or exactly 18 */
console.log(ageSarah >= 18);

// console has access to all variables in the current browser tab

/* can store results if need later in code. variable hold boolean value. */
const isFullAge = ageSarah >= 18;

/* what if we don't want intermediate age variables and do a comparison in one go. */
console.log(now - 1991 > now - 2018);

/* Question - how does JavaScript know if to do the maths first or comparison first. */
/* Thought: Is the first thing to do now -1991 = 46, then JavaScript could compare 46 to now after
the > right away. */
/* If the 'Thought' was true, JavaScript would be proceeding to read the code from left to right.
But we will see that it doesn't. JavaScript has some way of knowing first it should do 
now - 1991 then it should do now - 2018 only at end when has two ages will compare them with operator 
in the middle. */
