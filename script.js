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

/* while loop more versatile than for loop cause don't necessarily need a
counter, we just added it in this example */
/* example of while loop without a counter - depends on random variable */

/* roll dice, keep rolling dice until till we roll a 6 and then stop. */

/* start by creating a random number between 1 and 6 */
/* Math.random() random number thats great or equal to 0 and less than 1 */

/* Math.trunc() removes any fractional digits */
/* Why + 1? 
Math.random() creates a random number between 0 and 1, including 0 but not 1
Thus, the maximum number that Math.random()*6 can create will still become 
5 after using Math.trunc() while the minimum will become 0. 
Since we are dealing with dice, we add one to get values between 1 and 6. */
let dice = Math.trunc(Math.random() * 6 + 1);

/* Keep running loop till roll a 6. */
/* so, dice !== 6 -> white dice roll isn't six */
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
}
