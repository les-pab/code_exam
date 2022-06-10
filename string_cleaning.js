const numberCleaner = function (input) {
  const text = input.toString();
  return text.replace(/[0-9]/gi, '');
};

console.log(numberCleaner('! !'));
console.log(numberCleaner('123456789'));
console.log(numberCleaner('This looks5 grea8t!'));
