// Use reduce to compute the sum of the squares of all of the numbers in
// an array:

/* eslint no-use-before-define:"off" */
const array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

function sumOfSquares(numbers) {
  return numbers.reduce((accum, num) => accum + (num * num), 0);
}
