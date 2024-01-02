const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

/* Question asked at end of the last video was why do these two subtractions 
'now - 1991'
and 
'now - 2018'
are executed before the '>' comparison operator.
*/
console.log(now - 1991 > now - 2018);
/* The question is why does the console.log code above work? */

/* Works cause JavaScript has a well defined order of operator precedence. I.e. the order in
which operators are executed. 
Precedence table:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
MDN doc link
Note from this that in relation to the operation:
console.log(now - 1991 > now - 2018);
calculation ' - ' (subtraction)
comparison ' > ' (greater than)

the comparison operator has a lower precedence '12' than the subtract operator '17'. Don't need to 
know this exactly just a general idea.
Maths operators usually executed first. 
before comparison operators. 

Can also see in table which operators are executed from left-to-right and which ones from right to left.
most mathematical operators - left to right. 
*/

/* proof of left to right -> below console.log 25 - 10 - 5 = 10*/
console.log(25 - 10 - 5);

/* assingment good example of right to left execution */
/* define two variables at the same time - leave as undefined */
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
/* console.log of x, y above produced 10 10 */
/* why are x and y both 10? When JavaScript finds this line of code to execute, it'll 
look at all the operators that are present, see the minus operators, start with these ->
high presendence 
so do:
x = y = 10 
Explain above? 10 is the result of doing 25 - 10 -5
*/
