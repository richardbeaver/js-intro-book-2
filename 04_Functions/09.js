// Identify all of the variables named on each line of the following code.
// You may assume that question is the name of a built-in function in
// JavaScript (it is not, so this code won't work as written).

function multiply(left, right) {
  const product = left * right;
  return product;
}

function getNumber(prompt) {
  /* eslint no-undef: "off" */
  return parseFloat(question(prompt));
}

const left = getNumber('Enter the first number: ');
const right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

/*
 5: multiply, left, right
 6: product, left, right
 7: product

 10: getNumber, prompt
 12: parseFloat, question, prompt

 15: left, getNumber
 16: right, getNumber
 17: console, left, right, multiply
    (log is a method on the console object; therefore, it is a property
    name, not a variable name)
*/
