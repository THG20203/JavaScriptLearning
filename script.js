/* Type conversion - explicitly/ manually convert from one type to another */
/* What if we have input field on webpage, user to input birthYear - inputs usually 
come as strings */
const inputYear = "1991";
// will be 199118 if don't convert inputYear from string */
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

/* below will give NaN - invalid number */
console.log(Number("Jonas"));
/* NaN typeof will be number - hence NaN maeaning invalid number rather than not a number */
console.log(typeof NaN);

/* converting number to string */
console.log(String(23));
/* JavaScript can convert to number, string or boolean. 3 types ONLY */

/* Type coercion - javascript automatically converts types behind the scenes for us */
/* Type coercion happens when an operator is dealing with two values that have different types. */
/* In example below have string, number then string */
console.log("I am " + 23 + " years old");

/* Above works cause of type coercion. + operator triggers coercion to strings. Whenever an operation
between a string and a number, the number will be converted to a string. */
