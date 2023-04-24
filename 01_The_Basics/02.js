// Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

let num = 4936;

// const onesPlace = num % 10;
// num = (num - onesPlace) / 10; // 439

// const tensPlace = num % 10;
// num = (num - tensPlace) / 10; // 43

// const hundredsPlace = num % 10;
// num = (num - hundredsPlace) / 10; // 4

// const thousandsPlace = num;

// const digits = [thousandsPlace, hundredsPlace, tensPlace, onesPlace];

// OR:

const digits = [];

while (num > 0) {
  const digit = num % 10;
  digits.unshift(digit);

  num = Math.floor(num / 10);
}

console.log(digits);
