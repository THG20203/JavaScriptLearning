/* loop over an array backwards, then second create a loop inside 
another loop */
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// Last lecture I looped from the beginning 0, 1, 2 ... all the way at 4
// Now, we want to go 4, 3, 2, ...., 0

/* 4 is length of array - 1 -> remember its 0 indexed */
/* second section, how long should it run for? if the counter is greater or equal to 0 */
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}
