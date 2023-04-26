// Take a look at this code snippet:

// let foo = 'bar';
// {
//   let foo = 'qux';
// }

// console.log(foo);

// What does this program log to the console? Why?

/*
 This program will log 'bar' to the console.
 `foo` is first initialized with the value 'bar'. Then, a second `foo`
 variable is created in block scope that shadows the original `foo`.
 However, the log is called outside this block (where the shadowing `foo`
 is now out of scope) and therefore only has access to the original
 `foo` variable, which is assigned to the value 'bar'.
*/
