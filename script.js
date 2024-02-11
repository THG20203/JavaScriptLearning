/* more features of for loop -> loop through array */
const jonas = [
  "Jonas",
  "Schmedmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

/* i is traditional counter name -> starting it at 0. This is because
arrays 0 based. */
/* remember x < y less than is read left to right so x is less than y */
/* computing value -> i.e. getting it from JavaScript itself hence jonas.length */
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
}

/* all we want to log to the console is each element of the array. So 
what kind of code would we like to achieve:
console.log(jonas[0])
console.log(jonas[1])
console.log(jonas[2])
console.log(jonas[3])
console.log(jonas[4])
jonas[5] doesn't exist
*/
