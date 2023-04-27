// Does the following code produce an error? Why or why not?
// What output does this code send to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

/*
 It will not produce an error. All 3 components of a 'for' loop statement are
 optional and 'i += 1' is a valid expression that returns the new value of the
 incremented `i` variable.

 Output:
 1
 2
 3
 4
 5
*/
