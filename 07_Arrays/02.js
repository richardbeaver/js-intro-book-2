// Log all of the even values from myArray to the console.

const myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

/* Expected Output:
6
4
2
4
16
0
*/

myArray.forEach((num) => {
  if (num % 2 === 0) console.log(num);
});

// Using a 'for' loop
for (let i = 0; i < myArray.length; i += 1) {
  const num = myArray[i];
  if (num % 2 === 0) {
    console.log(num);
  }
}
