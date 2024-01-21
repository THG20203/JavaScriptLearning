/* strict mode -> easier to write secure code. Can have comments before use strict 
but NOT code. */
"use strict";

/* strict creates visable errors for us, without -> javascript wouldn't let us know 
we made a mistake */

/* certain person, right now doesn't have drivers license but they've passed test */
let hasDriversLicense = false;
const passTest = true;

/* now want some logic, when they pass test, hasDriversLicense set to true */
/* if (passTest) works cause its a boolean value -> so condition is either true or false */
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive");

/* with strict mode on, get Uncaught ReferenceError: hasDriverLicense is not defined */

/* use strict mode -> shortlist of varialbe names that might be added to language 
later. Shown in example below: */
const interface = "Audio";

/* code above will cause Uncaught SyntaxError: Unexpected strict mode reserved word 
(at script.js:21:7) */
