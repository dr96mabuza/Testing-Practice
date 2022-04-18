const ceasarCipher = (a) => {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const letters = a.split("");

  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < alphabets.length; j++) {
      if (letters[i] === alphabets[j]) {
       let letters[i] = alphabets[j + 1];
      } /* else if (letters[j] === "z") {
        result.push("a");
      } */
    }
  }
  return letters.join("");
};

module.exports = ceasarCipher;
