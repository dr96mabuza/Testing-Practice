const ceaserCipher = require("./ceasarCipher");

test("changes each letter from the string to the next letter of the alphabet", () => {
  expect(ceaserCipher("abcdefghijklmnopqrstuvwxyz", +1)).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
});
test("with larger shifts", () => {
  expect(ceaserCipher("attack", 24)).toBe("yrryai");
});
