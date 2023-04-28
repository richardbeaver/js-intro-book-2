// Add a qux property with value 3 to the myObj object we created in the
// previous exercise. Now, examine the following code snippets:

const myProtoObj = {
  foo: 1,
  bar: 2,
};

const myObj = Object.create(myProtoObj);
myObj.qux = 3;

// Snippet 1
// const objKeys = Object.keys(myObj);
// objKeys.forEach(function (key) {
//   console.log(key);
// });

// Snippet 2
// for (let key in myObj) {
//   console.log(key);
// }

// Without running this code, can you determine whether these two snippets
// produce the same output? Why?

//

/*
 The two snippets will not produce the same output. `Object.keys()` only
 includes an object's own properties, while a for/in loop iterates over all
 properties in the prototype chain. Here, the qux property is the only own
 property of myObj. So, the result of Object.keys(myObj) will include only
 the qux property, while the for/in loop will include the foo and bar
 properties from the prototype object.
*/
