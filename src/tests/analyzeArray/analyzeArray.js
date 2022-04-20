function analyzeArray(a) {
  function Object(average, min, max, length) {
    this.average = average;
    this.min = min;
    this.max = max;
    this.length = length;
  }

  function ave() {
    const result = a.reduce((num, total) => (total += num), 0);
    return result / a.length;
  }

  const ordered = a.sort((num1, num2) => {
    if (num1 > num2) {
      return 1;
    }
    if (num2 > num1) {
      return -1;
    }
  });

  const obj = new Object(ave(), a[0], a[a.length - 1], a.length);
  return obj;
}

module.exports = analyzeArray;
