// Create a function that creates and returns a copy of an object. The
// function should take two arguments: the object to copy and an array of
// the keys that you want to copy. Do not mutate the original object.

// The function should let you omit the array of keys argument when calling
// the function. If you do omit the argument, the function should copy all
// of the existing keys from the object.

// Here are some examples for your reference:

const objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

/* eslint no-multi-spaces:"off", no-use-before-define:"off" */
const newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

const newObj2 = copyObj(objToCopy, ['foo', 'qux']);
console.log(newObj2);       // => { foo: 1, qux: 3 }

const newObj3 = copyObj(objToCopy, ['bar']);
console.log(newObj3);       // => { bar: 2 }

//

function copyObj(givenObj, keys = Object.keys(givenObj)) {
  const result = {};

  keys.forEach((key) => {
    result[key] = givenObj[key];
  });

  return result;
}

// Could omit default paramter and use Object.assign() if no keys given:
function copyObj2(givenObj, keys) {
  const result = {};

  if (keys) {
    keys.forEach((key) => {
      result[key] = givenObj[key];
    });
    return result;
  }

  return Object.assign(result, givenObj);
}
