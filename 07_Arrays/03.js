/*
Let's make the problem a little harder.
In this problem, we're again interested in even numbers, but this time the
numbers are in nested arrays in a single outer array.
*/

const myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach((arr) => {
  arr.forEach((num) => {
    if (num % 2 === 0) console.log(num);
  });
});

for (let i = 0; i < myArray.length; i += 1) {
  for (let j = 0; j < myArray[i].length; j += 1) {
    const num = myArray[i][j];
    if (num % 2 === 0) {
      console.log(num);
    }
  }
}
