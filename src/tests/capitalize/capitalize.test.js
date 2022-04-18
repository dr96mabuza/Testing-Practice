const capitalize = require("./capitalize");

test("capitalizes first letter only", () => {
  expect(capitalize("pRoJeCt")).toBe("Project");
});
test("capitalize first letter of a sentance", () => {
  expect(capitalize("capiTAliZe a senTANce")).toBe("Capitalize a sentance");
});
