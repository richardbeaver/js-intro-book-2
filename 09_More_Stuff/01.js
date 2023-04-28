// What does this code log to the console? Why?

const array1 = [1, 2, 3];
const array2 = array1;
array1[1] = 4;
console.log(array2);

/*
 [1, 4, 3]

 `array2` is initialized as the value of array1. Assignment of an array to
 another array does not create a new object. So, the refernce that `arrayy1`
 holds is copied to`array2` and the two variables now reference the same array
 in memory. We then reassign a value in that array, so the change is reflected
 in `array2`.
*/
