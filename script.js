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
/* inside brackets -> could've constructed name using template literal, */
console.log(jonas["first" + nameKey]);
