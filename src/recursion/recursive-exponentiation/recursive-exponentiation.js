/*
Create the function pow, where you need to call pow(n, e) recursively.

2⁰ = 1
2¹ = 2 = 2 * 2⁰
2² = 2 * 2 = 2¹ * 2
2³ = 2 * 2 * 2 = 2² * 2
2⁴ ...

exemple pour expliquer à Gwen :
pow (3, 6) = 3*3*3*3*3*3 = 3⁶ = 3*3⁵ = 729

This function must be recursive: you can't use a loop.

You can't use Math.pow().

Add you own tests.

*/

// TODO add your code here

  function pow(n, e) {
    return e === 0 ?  1 : n * pow(n, e - 1);
  }
// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof pow, "function");
assert.strictEqual(pow.length, 2);
assert.strictEqual(
  pow.toString().includes("Math.pow"),
  false,
  "don't use Math.pow()"
);
assert.strictEqual(pow.toString().includes("for "), false, "don't use a loop");
assert.strictEqual(
  pow.toString().includes("while "),
  false,
  "don't use a loop"
);
assert.strictEqual(
  pow.toString().includes("pow("),
  true,
  "pow must be recursive"
);
// TODO add your tests:

assert.strictEqual(pow(0, 0), 1);
assert.strictEqual(pow(3, 3), 27);
assert.strictEqual(pow(6, 9), 10077696);
assert.strictEqual(pow(987, 0), 1);

// End of tests
