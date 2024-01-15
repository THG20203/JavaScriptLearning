/* The spread (...) syntax allows an iterable, such as an array or string, 
to be expanded in places where zero or more arguments (for function calls)
or elements (for array literals) are expected. In an object literal, the 
spread syntax enumerates the properties of an object and adds the key-value 
pairs to the object being created. */
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// Expected output: 6
/* The ...numbers syntax is the spread operator. It expands the elements of 
the numbers array into individual arguments. So, effectively, it is equivalent 
to calling sum(1, 2, 3). The sum function then adds these three values 
together, resulting in the expected output of 6. */

console.log(sum.apply(null, numbers));
// Expected output: 6
/* The apply method is used to invoke a function with a given this value 
and an array or array-like object of arguments. In this case, it's being 
used to pass the elements of the numbers array as arguments to the sum function.

The first argument to apply is the value that should be used as this when 
calling the sum function. In this case, null is used because the sum function 
doesn't rely on a specific this context.

The second argument to apply is an array (numbers), and its elements are 
passed as arguments to the sum function. Effectively, this is equivalent 
to calling sum(1, 2, 3). The sum function adds these three values 
together, resulting in the expected output of 6. */
