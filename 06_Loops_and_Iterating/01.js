/*
Modify the age.js program you wrote in the exercises for the Input/Output
chapter. The updated code should use a for loop to display the future ages.
*/

const rlSync = require('readline-sync');

const age = parseInt(rlSync.question('How old are you? '), 10);

console.log(`You are ${age} years old.`);

for (let i = 10; i <= 40; i += 10) {
  console.log(`In ${i} years, you will be ${age + i} years old.`);
}
