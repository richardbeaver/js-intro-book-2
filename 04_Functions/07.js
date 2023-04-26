// Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');

/*
 Hello
 undefined

 The parameter `bar` is initialized to 'Hello' and is printed.
 The parameter `qux` is initialized to undefined because a second argument
 is not supplied when the function is called. JS will print 'undefined' when
 an undefined value is provided to console.log().
*/
