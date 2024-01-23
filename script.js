/* Functions three different tyoes */
/* declaration - function that can be used before declared. */
function calcAge(birthYear) {
  return 2037 - birthYear;
}
/* expression: */
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

/* arrow: */
const calcAge = (birthYear) => 2037 - birthYear;
