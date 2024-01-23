/* now consider food processor can only make juice with smaller pieces.
So before making juice, need another machine to cut the fruits we give it */
function cutFruitPieces(fruit) {
  return fruit * 4;
}

/* Go back to initial example of function producing food processor -> reviewed
a certain number of apples, certain number of oranges -> based on this produced 
and returned a juice to us. */
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3)); // Juice with 8 apples and 12 oranges.
