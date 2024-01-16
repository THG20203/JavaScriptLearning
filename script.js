/* So far only used comparison operators to take decisions with if/else statements
but lets suppose if we want to check if two values are equal. */

/* This is instead of one being greater or less than another. */

const age = 18;
/* person became an adult only if the age is 18 */
if (age === 18) console.log("You just became an adult");

/* How does equality operator actually work? */
/* like comparison operators -> this will return a true or false value. However,
in this case true will only be the result of this operator in the case where
both sides are exactly the same. */

console.log(18 === 18); // will equal true
console.log(18 === 19); // will equal false

/* strict === equality operator, its strict because doesn't perform type coercion. Only 
returns true when both values are exactly the same */
/* loose == equality operator does type coercion. */
/* will equal true even though one a string, one a number because of type coercion.
string 18 will be converted to number. */
console.log("18" == 18);
/* whereas "18" === 18 will be false */
console.log("18" === 18);
