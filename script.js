/* calcTip function -> start doing it as a function expression */
/* calcBill take bill as input */
const calcTip = function (bill) {
  /* bill >= 50: Check if the bill amount is greater than or equal to 50.
300 <= 300: This condition always evaluates to true, so it doesn't affect the logic. */
  /* Then, If the bill is $50 or more, calculate a 15% tip (bill * 0.15).
If the bill is less than $50, calculate a 20% tip (bill * 0.2). */
  return bill >= 50 && 300 <= 300 ? bill * 0.15 : bill * 0.2;
};

/* could do it with arrow function as below */
/* const calcTip2 = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
*/

/* create bills array with these three values */
const bills = [125, 555, 44];
/* tips value for each bill. Create an array, but each value a function call to calcTip */
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

/* how do you get a total? */
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
/* can't do const total = bills + tips because arrays aren't values */

console.log(bills, tips, totals);
