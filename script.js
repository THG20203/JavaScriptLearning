/* How do logical operators work in javascript? lets use boolean variables from 
the last lecture. */
const hasDriversLicense = true; // A
const hasGoodVision = false; // B

/* AND operator -> look at two logical values */
console.log(hasDriversLicense && hasGoodVision);
/* result of true and true = true. True is displayed in console.log */
/* result of true and false = false. False is displayed in console.log */

/* OR operator */
console.log(hasDriversLicense || hasGoodVision);
/* result of true and false on OR = true. True displayed in console.log */

/* NOT operator */
console.log(!hasDriversLicense);

/* Can NOW use boolean variables and logic to model complex situations */
const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive");
}
