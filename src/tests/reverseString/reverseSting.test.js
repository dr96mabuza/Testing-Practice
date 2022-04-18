const reverseString = require("./reverseString");

test("reverse a 'string' to be 'gnirts'", () => {
  expect(reverseString("string")).toBe("gnirts");
});
test("reverse a sentance", () => {
  expect(reverseString("I am just a string")).toBe("gnirts a tsuj ma I");
});
test("alerts if input is not a string", () => {
  expect(reverseString(["i am a string in an array"])).toBe(false);
});
