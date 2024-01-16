/* Truthy and Falsy Values */

/* Falsy values -> aren't exactly false but will become false when try and convert them 
into a boolean */
/* JavaSceript = 5 falsy values -> 0, "", undefined, null, NaN*/

/* 5 values above -> turn falsy when convert to a boolean. They will become falsy when converted
to a boolean. */

/* Everything else is a truthy values -> values that will be converted to true, i.e. any value that
is not 0 will be converted to true when we attempt to convert them to a boolean. */

console.log(Boolean(0)); // will equal false
console.log(Boolean(undefined)); // will equal false
console.log(Boolean("Tristan")); // will equal true -> any string not an empty string is a truthy value
console.log(Boolean({})); // will equal true -> empty object is a truthy value
console.log(Boolean("")); // will equal false
