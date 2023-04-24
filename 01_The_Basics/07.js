/*
Will an error occur if you try to access an array element with an index that
is greater than or equal to the length of the array? For example:

let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?

*/

// No, there will be no error but the result will be undefined, which is what
// will be logged to the console by the third line.
