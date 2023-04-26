// What does this code log to the console? Does executing the foo function
// affect the output? Why or why not?

// let bar = 1;
// function foo() {
//   let bar = 2;
// }

// foo();
// console.log(bar);

/*
 This logs '1' to the console.
 The `foo` function call does not affect the program's output as it does not
 log anything and it does not reassign the global `bar` variable.
 The `foo` function creates a new local `bar` variable and assigns the value
 2 to that new local variable. The local variable is then dropped at the end
 of the `foo` function execution.
 This means the global `bar` variable that is logged on line 10 is not affected
 by the call to `foo`.

 Instead, if the `foo` function body included: 'bar = 2;', then that would
 reassign the global `bar` variable and the program would output '2';
*/
