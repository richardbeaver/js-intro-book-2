// Create a new object named myObj that uses myProtoObj as its prototype.

const myProtoObj = {
  foo: 1,
  bar: 2,
};

const myObj = Object.create(myProtoObj);
