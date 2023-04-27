/*
The following code causes an infinite loop (a loop that never stops iterating). Why?
*/

// let counter = 0;

// while (counter = 1) {
//   console.log(counter);
//   counter += 1;

//   if (counter > 2) {
//     break;
//   }
// }

/*
 The loop condition is not using the equality operator, but instead reassigning
 the `counter` variable in each loop iteration. This reassignment always
 returns 1, a truthy value. Therefore, the loop consition never becomes false.
 In addition, the `counter` value check inside the loop will always be false.
 The `counter` variable will always equal 2 at that point in the code because
 it is reassigned to 1 before every iteration.
*/
