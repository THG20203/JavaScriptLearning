/* now, creating new array that will contain all the types
for all the elements */
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  /* new array, types -> will be based on the jonas array, so will have 
  the same length. */
  /* types[i] = typeof jonas[i]; */
  /* do it a different way - push method -> add to the array. new element to end of array */
  types.push(typeof jonas[i]);
}
console.log(types);

/* Why does types[i] = typeof jonas[i]; work?
types[0] = typeof jonas[i]; 
type[0] = typeof jonas[0] then so on and so on */
