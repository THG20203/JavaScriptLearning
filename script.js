const age = 15;

/* in practice was always write condition in the if else statement parentheses */
if (age >= 18) {
  console.log("Sarah can start driving lessons.");
} /* else will be executed whenever this condition is false */ else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}
