/* Expression = piece of code that produces a value -> i.e. 3 + 4 */
3 + 4;
/* Number is an expression too i.e. 1991 -> will produce value in JS */
1991;
/* boolean code will also produce a value */
true && false && !false;

/* Statements = piece of code executed doesn't produce piece of value on 
itself */
/* This if else statment below doesn't produce a value does it? All it 
does is declares variable called str */
if (23 > 10) {
  const str = "23 is bigger";
}

/* Template literal -> only insert expressions not statements. i.e. 2037 - 1991 
as shown below */
console.log(`I'm ${2037 - 1991} years old.`);
