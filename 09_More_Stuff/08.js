// Challenging Exercise
// This exercise has nothing to do with this chapter. Instead, it uses
// concepts you learned earlier in the book. If you can't figure out the
// answer, don't worry: this question can stump developers with more
// experience than you have.

// Earlier, we learned that Number.isNaN(value) returns true if value is
// the NaN value, false otherwise. You can also use Object.is(value, NaN)
// to make the same determination.

// Without using either of those methods, write a function named isNotANumber
// that returns true if the value passed to it as an argument is NaN, false if
// it is not.

/* eslint no-self-compare:"off" */
function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(NaN)); // true
console.log(isNotANumber(5)); // false
console.log(isNotANumber('a')); // false;
console.log(isNotANumber(true)); // false;
console.log(isNotANumber(false)); // false;
console.log(isNotANumber([NaN])); // false
console.log(isNotANumber({ a: NaN })); // false
