const bill = 25;

/* Write your code below. Good luck! 🙂 */

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill value is ${bill} and tip is ${tip} and the total value is (${
    bill + tip
  })`
);
