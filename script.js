const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

/* it needs all values to be true for && to work */
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive!");
}
