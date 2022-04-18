const calculator = require("./calculator");

test("1 + 1 = 2", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test("adds a string and a number", () => {
  expect(calculator.add("1", 2)).toBe(3);
});
test("subtracts two numbers", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});
test("subtracts strings and numbers", () => {
  expect(calculator.subtract(1, "2")).toBe(-1);
});
test("divide to numbers", () => {
  expect(calculator.divide(2, 2)).toBe(1);
});
test("divides to strings", () => {
  expect(calculator.divide("2", "2")).toBe(1);
});
test("multiplies two numbers", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});
test("multiplies two numbers saved as strings", () => {
  expect(calculator.multiply("2", "2")).toBe(4);
});
