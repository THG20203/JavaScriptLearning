/* another example array of birthYears */
const years = [1991, 2007, 1969, 2020];

/* now want to calculate ages for these birthYears, store them in an array */

/* create an empty array to hold the ages - we're going to do ages.push() to
push into the empty array. */
const ages = [];

for (let i = 0; i < years.length; i++) {
  /* years[i] is years at current loop position */
  ages.push(2037 - years[i]);
}
