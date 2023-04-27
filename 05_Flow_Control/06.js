// What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

/*
 Not Empty

 An empty array is a truthy value, and so evaluates to true. So, the first
 branch of the `if` statement will execute.
*/
