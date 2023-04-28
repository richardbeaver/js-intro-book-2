// Use map and filter to first determine the lengths of all the elements in an
// array of string values, then discard the even values (keep the odd values).

/* eslint no-use-before-define:"off" */
const arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(strings) {
  const lengths = strings.map((str) => str.length);
  return lengths.filter((num) => num % 2 !== 0);
}
