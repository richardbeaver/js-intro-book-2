/*
Write a dynamic greeter program named greeter.js. The program should ask for
your name, then output Hello, {name}! where {name} is the name you entered:

$ node greeter.js
What is your name? Sue
Hello, Sue!
*/

/* eslint import/no-extraneous-dependencies: "off" */
const rlSync = require('readline-sync');

const name = rlSync.question('What is your name? ');
console.log(`Hello, ${name}!`);
