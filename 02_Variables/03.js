// What happens when you run the following program? Why do we get that result?

// {
//   let foo = 'bar';
// }

// console.log(foo);

/*
 This results in the error that `foo` is not defined.
 `foo` has block scope and is not visible/accessible outside its block.
 Therefore, the console.log() call cannot see the foo variable.
*/
