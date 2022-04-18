const ceaserCipher = require("./ceasarCipher");

test("changes each letter from the string to the next letter of the alphabet", () => {
  expect(ceaserCipher("abcdefghijklmnopqrstuvwxyz")).toBe(
    "bcdefghijklmnopqrstuvwxyza"
  );
});
test.skip("works with sentances", () => {
  expect(ceaserCipher("defend the east wall of the castle")).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
});
