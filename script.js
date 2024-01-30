/* Square brackets not only for retreiving elements from the array, 
but we can also change it to add elements to the array. */

const friends = ["Michael", "Steven", "Peter"];
/* can mutuate arrays */
friends[2] = "Jay";
console.log(friends); // (3) ["Michael", "Steven", "Jay"]
