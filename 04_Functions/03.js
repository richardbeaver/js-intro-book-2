/*
Write a program that uses a multiply function to multiply two numbers and
returns the result. Ask the user to enter the two numbers, then output the
numbers and result as a simple equation.

$ node multiply.js
Enter the first number: 3.141592653589793
Enter the second number: 2.718281828459045
3.141592653589793 * 2.718281828459045 = 8.539734222673566
*/

const rlSync = require('readline-sync');

function multiply(a, b) {
  return a * b;
}

function getNumber(prompt) {
  const num = rlSync.question(prompt);
  return parseFloat(num);
}

const firstNum = getNumber('Enter the first number: ');
const secondNum = getNumber('Enter the second number: ');

console.log(`${firstNum} * ${secondNum} = ${multiply(firstNum, secondNum)}`);
