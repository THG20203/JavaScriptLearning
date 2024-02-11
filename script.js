/* continue and break */
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

/* continue - exit the current iteration of the loop and continue to the next 
one */
console.log("--ONLY STRINGS--");
for (let i = 0; i < jonas.length; i++) {
  /* we only want to log strings to the console. 
  /* So !== "string" checks whether the data type of the element at index i is 
  NOT equal to the string "string" */
  if (typeof jonas[i] !== "string") continue;
  /* When continue is encountered inside a loop, the current iteration of the 
  loop is stopped, and the loop proceeds to the next iteration. In this context, 
  if the condition (typeof jonas[i] !== "string") is true (i.e., if the data 
  type of the element at index i is not a string), the loop will skip the current
  iteration and move to the next one. */
  console.log(jonas[i], typeof jonas[i]);
}
/* break - used to terminate the whole loop */
