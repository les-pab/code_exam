const caseCheck = function (c1, c2) {
  const rLetters = new RegExp(/[^A-Z|^a-z]/);
  const rUpper = new RegExp(/[A-Z]/);
  const rLower = new RegExp(/[a-z]/);

  if (rLetters.test(c1) || rLetters.test(c2)) {
    return -1;
  }

  if (
    (rLower.test(c1) && rLower.test(c2)) ||
    (rUpper.test(c1) && rUpper.test(c2))
  ) {
    return 1;
  }

  return 0;
};

console.log(caseCheck('a', 'g'));
console.log(caseCheck('A', 'C'));
console.log(caseCheck('b', 'G'));
console.log(caseCheck('B', 'g'));
console.log(caseCheck('0', '?'));
