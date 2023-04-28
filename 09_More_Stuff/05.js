// What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

/*
 The function first creates an array that is the result of splitting the
 supplied string argument at each space character into an array of the
 substrings.
 It reverses that array in place, and then creates another new array containing
 the lengths of each substring.
 It then returns that array of lengths.
*/
