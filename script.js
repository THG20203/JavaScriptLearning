/* indexOf */
const friends = ["Michael", "Steven", "Peter"];
console.log(friends.indexOf("Steven")); // 1 - cause index based.

/* includes -> instead of returning index of the element, true if
in the array, false if not. */
console.log(friends.includes("Steven")); // True
console.log(friends.includes("Joseph")); // False
/* strict equality for includes check - so if had 23 number but checked for
"23" string wouldn't work. It does strict equality. It DOES NOT do type coercion. */

/* could do */
if (friends.includes("Steven")) {
  console.log("Includes Steven.");
}
