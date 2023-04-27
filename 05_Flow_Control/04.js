// What does the following code log to the console, and why?

/* eslint no-fallthrough: "off" */
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/*
 Product2
 Product3
 Product not found

 The argument passed to the function, '113', matches the case '113' clause,
 so the corresponding statement will be executed. But, because there are no
 break statements after that or any following clauses, execution falls through
 this clause and executes the code in the case '142' and default clauses as well.
*/
