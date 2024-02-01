/* indexOf */
const friends = ["Michael", "Steven", "Peter"];
console.log(friends.indexOf("Steven")); // 1 - cause index based.

/* includes -> instead of returning index of the element, true if
in the array, false if not. */
console.log(friends.includes("Steven")); // True
console.log(friends.includes("Joseph")); // False
