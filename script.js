/* Type conversion - explicitly/ manually convert from one type to another */
/* What if we have input field on webpage, user to input birthYear - inputs usually 
come as strings */
const inputYear = "1991";
// will be 199118 if don't convert inputYear from string */
console.log(inputYear + 18);
console.log(Number(inputYear));
/* Type coercion - javascript automatically converts types behind the scenes for us */
