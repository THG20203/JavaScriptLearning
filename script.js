/*
1. For each of them, create an object with properties for their full name, mass, and height 
(Mark Miller and John Smith)
2. Create a "calcBMI" method on each object to calculate the BMI (the same method on both
objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has a higher BMI, together with the full name and respective BMI. 
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

/* creating an object for each of them */
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  /* now, create the calcBMI method. function with no parameters -> function without any 
  parameters -> we will take the data directly from the object -> just like calcAge previously */
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);
