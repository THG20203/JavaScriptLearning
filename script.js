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

/* The question is why does the console.log code above work. */
