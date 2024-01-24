/* Functions three different tyoes */
/* declaration - function that can be used before declared. */
function calcAge(birthYear) {
  return 2037 - birthYear;
}
/* expression - essentially function values stored in variable */
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

/* arrow - great for quick one line functions. No arrow (more later). */
const calcAge = (birthYear) => 2037 - birthYear;
