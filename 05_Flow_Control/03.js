// Let's improve our previous implementation of evenOrOdd. Add a validation
// check to ensure that the argument is an integer. If it isn't, the function
// should issue an error message and return.

function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('Error - input must be an integer.');
    return;
  }

  console.log(num % 2 === 0 ? 'even' : 'odd');
}
