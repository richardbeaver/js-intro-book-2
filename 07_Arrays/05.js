// Write a findIntegers function that takes an array argument and returns
// an array that contains only the integers from the input array. Use the
// filter method in your function.

/* eslint no-use-before-define:"off" */
// Example:
const things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
const integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

//

function findIntegers(arr) {
  return arr.filter((item) => Number.isInteger(item));
}
