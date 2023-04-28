// Identify all of the variables, object property names, primitive values,
// and objects in the following code. This problem is even more challenging
// than the previous one.
// Note that some items in this program may appear in multiple categories.

function bar(arg1, arg2) {
  const foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

const result = bar('Victor', 'Antonina');

/*

 Variables:
 bar, arg1, arg2, foo, qux, result

 Object property names:
 abc, def, ghi, jkl, mno, pqr, 0, 1, 2, 3 (array indexes)

 Primitive values:
 'Hello', 1, 2, 3, 4, 5, 6, '0', '1', '2', '3', 'abc', 'def', 'ghi', 'jkl',
 'mno', 'pqr', null, NaN, 'Victor', 'Antonina'

 Objects:
 bar, the object assigned to qux, [1, 2, 3, [4, 5, 6]], [4, 5, 6]

*/
