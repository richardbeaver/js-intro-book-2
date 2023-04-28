// Challenging Exercise
// This exercise has nothing to do with this chapter. Instead, it uses
// concepts you learned earlier in the book. If you can't figure out the
// answer, don't worry: this question can stump developers with more
// experience than you have.

// Earlier, we learned that JavaScript has multiple versions of the numeric
// value zero. In particular, it has 0 and -0. While it's mathematically
// nonsensical to distinguish between 0 and -0, they are distinct values in
// JavaScript. We won't get into why JavaScript has a 0 and -0, but it can be
// useful in some cases.

// There's a problem, however: JavaScript itself doesn't seem to realize
// that the values are distinct:

// > 0 === -0
// = true

// > String(-0)
// = '0'

// Fortunately, you can use Object.is to determine whether a value is -0:

// > let value = -0;
// > Object.is(value, 0)
// = false

// > Object.is(value, -0)
// = true

// There are other ways to detect a -0 value. Without using Object.is, write
// a function that will return true if the argument is -0, and false if it is
// 0 or any other number.

function isNegativeZero(number) {
  // return 1 / number === -Infinity;

  // Or to be more explicit/avoid unnecessary divisions:
  return (number === 0) && (1 / number === -Infinity);
}

console.log(isNegativeZero(-0)); // true
console.log(isNegativeZero(0)); // false
console.log(isNegativeZero(NaN)); // false
console.log(isNegativeZero(-1)); // false
console.log(isNegativeZero(1)); // false
console.log(isNegativeZero([-0])); // false
console.log(isNegativeZero({ a: -0 })); // false
