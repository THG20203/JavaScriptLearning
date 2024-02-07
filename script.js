/* Get properties from object, using property name itself -> explain it 
by writing out jonas object. */
const jonas = {
  firstName: "jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);
/* DOT NOTATION */
/* dot . is operator go to the property with name specified */
console.log(jonas.lastName);
/* BRACKET NOTATION */
/* bracket notation in brackets can put any expression we like, so don't have
to explicitly write string, can compute it from operation. Remember operation 
is basically an expression. */
console.log(jonas["lastName"]);

const nameKey = "Name";
/* inside brackets -> could've constructed name using template literal, but not 
necessary -> see with + we can put any expression. */
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

/* same thing wouldn't work with dot notation 
-> this wouldn't work:
console.log(jonas."last" + nameKey)*/

/* when do you use dot notation, when do you use bracket?
When we need to first compute the property name use the bracket notation ->
i.e. "first" + nameKey, 
but in other cases use dot notation. */

/* another Bracket Notation example */
const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, job and friends"
);
/* interestIn to the console, check it actually works */
console.log(interestedIn);
/* with prompt-> if write 'job' for example and press enter, job will appear in 
the console */
