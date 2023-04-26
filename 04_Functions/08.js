// Without running the following code, what do you think it will output?

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);

/*
 42
 3.1515

 The first two arguments passed to `foo` will be printed. The third argument
 will be ignored.
*/
