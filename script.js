/* Objects can hold differenttypes of data, arrays and objects inside of objects. 
But now, can take it even further. */
/* Functions are really just a value. If functions are a value then that just 
means we can create a key value pair in which a value is just a function. */
/* can add functions to objects */
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  /* adding a boolean */
  hasDriversLicense: true,
  /* adding function as a key value pair -> name of function as key or property. 
  calcAge not normal variable, but property of the jonas object. */
  /* any function attached to an object is called a method */
  /* method is a property */
  /* this keyword is equal to the object calling the method */
  calcAge: function () {
    console.log(this); // when log this to console, will show whole Jonas object
    /* with this.age we are essentially creating jonas.age */
    this.age = 2037 - this.birthYear;
    /* then simply return this.age -> we don't even need to return this.age we don't
    even have to make this method return the age. */
    return this.age;
  },
  getSummary: function () {
    /* in template string can do function call so calcAge() works */
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license.`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);

/* any function attached to an object is called a method */
/* method is a property -> just happens to be a property that holds a function value. */

/* Get summary string -> summarise data of jonas? write out "Jonas is a 46 year old teacher,
and he has a drivers license" */
console.log(jonas.getSummary());
