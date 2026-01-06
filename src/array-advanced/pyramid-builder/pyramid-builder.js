/*
Create a function `build` which returns a pyramid of `n` floors, from top to bottom, stored in a string array.

Example :

n = 5 :
[
    "    *    ",
    "   ***   ",
    "  *****  ",
    " ******* ",
    "*********"
]

If `n` is zero or negative, throw a RangeError.
If `n` is null or not a number, throw a TypeError.

*/

// TODO add your code here

function build(number) {
  if (typeof(number) !== "number") {
    throw new TypeError;
  }
  
  else if (number < 1) {
    throw new RangeError;
  }

  let arr = [];

  for (let i = 0; i <= (number - 1) ; i++) {
    const n = ((number - 1)-i);
    const spaces= " ".repeat(n);
    const asterix = "**".repeat(i);
    arr[i] =`${spaces}*${asterix}${spaces}`;
  }
  return (arr);
}

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof build, "function");
assert.strictEqual(build.length, 1);
assert.deepStrictEqual(build(1), ["*"]);
assert.deepStrictEqual(build(2), [" * ", "***"]);
assert.deepStrictEqual(build(5), [
  "    *    ",
  "   ***   ",
  "  *****  ",
  " ******* ",
  "*********",
]);
assert.throws(() => {
  build(0);
}, RangeError);
assert.throws(() => {
  build(-1);
}, RangeError);
assert.throws(() => {
  build(null);
}, TypeError);
assert.throws(() => {
  build("a");
}, TypeError);
// End of tests
