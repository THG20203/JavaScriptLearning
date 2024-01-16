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
/* Type Coercion Example 1: */
/* + operator triggers coercion from number to string. */
console.log("I am " + 23 + " years old");

/* Same happens with template literals. It also takes number values and converts to string. */

/* Type Coercion Example 2: */
/* - operator triggers coercion from string to number. */
console.log("23" - "10" - 3); // will equal 3
/* + operator triggers coercion from number to string. */
console.log("23" + "10" + 3); // will equal 23103
/* multiple and divide are same as minus -> converts to number */
console.log("23" * "2"); // will equal 46
console.log("23" / "2"); // will equal 11.5

let n = "1" + "1"; // will equal "11" + converts to string;
n = n - 1; // - operator converts to number
console.log(n); // will equal 10
