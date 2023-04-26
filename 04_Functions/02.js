/*
In the exercises for the previous chapter, you wrote a dynamic greeter program
named greeter.js. Add a function to this program that solicits the user's first
and last names in separate invocations; the function should return the
appropriate name as a string. Use the return values to greet the user with
their full name.
*/

const rlSync = require('readline-sync');

function getName(prompt) {
  const name = rlSync.question(prompt);
  return name;
}

const firstName = getName('What is your first name? ');
const lastName = getName('What is your last name? ');

console.log(`Hello, ${firstName} ${lastName}!`);
