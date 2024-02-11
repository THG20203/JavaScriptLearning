/* loops in loops */
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----STARTING EXERCISE ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`lifting weight repetition ${rep}`);
  }
}

/* How will this look on the console.log? 
------- Starting exercise 1
Lifting weight repetition 1
Lifting weight repetition 2
Lifting weight repetition 3
Lifting weight repetition 4
Lifting weight repetition 5
------- Starting exercise 2
Lifting weight repetition 1
Lifting weight repetition 2
Lifting weight repetition 3
Lifting weight repetition 4
Lifting weight repetition 5
------- Starting exercise 3
Lifting weight repetition 1
Lifting weight repetition 2
Lifting weight repetition 3
Lifting weight repetition 4
Lifting weight repetition 5
*/

/* start exercise 1 then within iteration of exercise 1 and new loop is created
that then creates lifting weights repetition from 1 to 5. then iteration of exercise 
2, then create lifting weights reptition 1 to 5 again etc. 
Total of 15 repetitions. */
