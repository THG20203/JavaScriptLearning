/* The while loop -> difference between for loop and while loop */

/* for loop comparison */
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

/* now we need to more explicitly define the other two components 
    of the for loop - we do the first outside */
let rep = 1;

/* while loop ->for the while loop, we can only specify a condition */
/* so in this case whilst repetitions are less or equal to 10 */
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  /* the last part, the counter is defined inside the for loop */
  rep++;
}
