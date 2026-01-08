const countChar = require("./count-letters");

test("countChar function exists", () => {
  expect(typeof countChar).toBe("function");
});

test("countChar as two parameters", () => {
  expect(countChar.length).toBe(2);
});

// TODO add your tests here
test("countChar function works", () => {
  expect(countChar("aaaaabbbaa", "a")).toBe(7);
  expect(countChar("bbacbaaa", "c")).toBe(1);
  expect(countChar("bbcc", "a")).toBe(0);
  expect(countChar(null, "a")).toBe(-1);
  expect(countChar("", "a")).toBe(0);
  expect(countChar("a", "a")).toBe(1);
  expect(countChar("a", null)).toBe(-1);
  expect(countChar("a", "")).toBe(-1);
});