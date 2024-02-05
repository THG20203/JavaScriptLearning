/* calcTip function -> start doing it as a function expression */
/* calcBill take bill as input */
const calcTip = function (bill) {
  /* bill >= 50: Check if the bill amount is greater than or equal to 50.
300 <= 300: This condition always evaluates to true, so it doesn't affect the logic. */
  /* Then, If the bill is $50 or more, calculate a 15% tip (bill * 0.15).
If the bill is less than $50, calculate a 20% tip (bill * 0.2). */
  return bill >= 50 && 300 <= 300 ? bill * 0.15 : bill * 0.2;
};
