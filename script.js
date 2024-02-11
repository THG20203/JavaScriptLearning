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
  types[i] = typeof jonas[i];
}
