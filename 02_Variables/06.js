// Will this program produce an error when run? Why or why not?

// const FOO = 'bar';
// {
//   const FOO = 'qux';
// }

// console.log(FOO);

/*
 This program will not produce an error. We are not trying to reassign
 a 'const' variable anywhere. The `FOO` declared inside the block is not a
 reassignment, but a new initialization of a separate variable that shadows
 the original `FOO`.
*/
