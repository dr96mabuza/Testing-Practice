const reverseString = (a) => {
  if (typeof a === "string") {
    return a.split("").reverse().join("");
  }
  return false;
};

module.exports = reverseString;
