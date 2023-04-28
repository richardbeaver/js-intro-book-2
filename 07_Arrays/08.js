// This problem is more challenging than most in this book. Don't worry if
// you can't solve it on your own.

// Write a function similar to the oddLengths function from Exercise 6, but
// don't use map or filter. Instead, try to use the reduce method:

/* eslint no-use-before-define:"off" */
const arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

// Hint: Use an array as the accumulator

function oddLengths(strings) {
  return strings.reduce((filteredNums, str) => {
    const len = str.length;
    if (len % 2 !== 0) filteredNums.push(len);
    return filteredNums;
  }, []);
}
