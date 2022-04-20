const ceasarCipher = (a, b) => {
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

  function numberCheck(num1, num2) {
    let answer = 0;
    if (Number(num1) + Number(num2) > 25) {
      answer = Number(num1) + Number(num2) - 26;
    } else if (Number(num1) + Number(num2) <= 25) {
      answer = Number(num1) + Number(num2);
    }
    return answer;
  }

  const letters = a.split("");
  const result = [];

  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < alphabets.length; j++) {
      if (letters[i] === alphabets[j]) {
        result.push(alphabets[numberCheck(j, b)]);
      } else if (letters[i] === "/[^a-z]") {
        result[i] = letters[i];
      }
    }
  }

  return result.join("");
};

module.exports = ceasarCipher;
