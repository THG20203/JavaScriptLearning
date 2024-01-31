/* Array exercise */

/* first get calcAge function */
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

/* Lets say we have an array of birthYears, we want to calculate the ages for some of them */
const years = [1990, 1967, 2002, 2010, 2018];

/* now we will be able to use the calcAge function and then store results of calculating 
the ages for some of these years into a new array */

/* passing array to calcAge function -> the function doesn't know what to do with it */
console.log(calcAge(years)); // console.log will be NaN
/* why? the operation return 2037 - birthYear expects a single value. We cannot do a 
number - an array. So 2037 - birthYear wouldn't work if birthYear was being treated as the 
years array. */

/* we cannot do operations with arrays: */
console.log(years + 10); // 1990, 1967, 2002, 2010, 201810
console.log(years - 10); // NaN

/* but we can get single values from the array */
const age1 = calcAge(years[0]); // 1990 (this works)
const age2 = calcAge(years[1]); // 1967 (this works)
const age3 = calcAge(years[years.length - 1]); // get last value with .length - 1 trick
console.log(age1, age2, age3);

/* Take above further, started with array, good to end up with new array const ages */
/* we can put function calls into an array cause they will produce a value */
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
