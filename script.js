const age = 15;

/* in practice was always write condition in the if else statement parentheses */
if (age >= 18) {
  console.log("Sarah can start driving lessons.");
} /* else will be executed whenever this condition is false */ else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

/* Note else blocks are optional. If theres is no else block, JavaScript 
will quickly move onto the next line as if the condition is false. */

/* if / else = control structure - this structure allows us to have more control
over the way our code is executed.
The whole code does not just execute in a linear way. JavaScript does not just execute
code in a linear way. Instead we can now control blocks of code that should execute and 
blocks that shouldn't */
