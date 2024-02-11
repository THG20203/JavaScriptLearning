/* loops automate repetitive tasks */
/* for loops have 3 parts. 
1). intial value of a counter. 
(Use let value, cause later counter will be updated)
2). logical condition evaluated before each iteration of the loop. 
(So before each time the code is executed)
3). increasing the counter.
(So increasing our counter by 1 each iteration. rep = rep + 1 can be
replaced by rep++) */

for (let rep = 1; rep <= 10; rep++) {
  /* number in console.log is current value of the counter. */
  console.log(`Lifting weights repetition ${rep}`);
}

/* in our case rep => 10. rep needs to stay below or 10. 
So this condition will be evaluated before each iteration of the loop. 
If the condition is 'true' the next iteration will run, but as soon 
as condition is false the loop stops, so no more code will be executed. */
/* So basically, the loop will run as long as the condition (2nd part) stays
true */
