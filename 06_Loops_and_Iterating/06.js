// Reimplement the factorial function from exercise 2 using recursion. Once
// again, you may assume that the argument is always a positive integer:

// Examples:
/* eslint no-use-before-define: "off", no-multi-spaces: "off" */
console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

function factorial(number) {
  if (number === 1) return 1;
  return number * factorial(number - 1);
}
