// What does the following program log to the console? Why?
/* eslint no-param-reassign:"off" */

const foo = {
  a: 'hello',
  b: 'world',
};

const qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

/*
 hi
 hello

 We pass the foo object into the bar function and the object is mutated, with
 its 'a' property reassigned to 'hi'.
 However, when `qux` is passed to the function, the argument2 variable is
 reassigned to 'hi', which does not mutate or reassign the qux variable, so
 the qux variable is not affected.
*/
