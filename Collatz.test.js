const Collatz = require('./Collatz');

function run() {
  const collatz = new Collatz();
  return [
    { condition: collatz.calculateSingleIteration(13) === 40, message: 'Calculating single operation of a odd number, should return number * 3 + 1' },
    { condition: collatz.calculateSingleIteration(12) === 6, message: 'Calculating single operation of an even number, should return number / 2' },

    { condition: collatz.getNumberOfIterations(13) === 10, message: 'Collatz for number 13 has a sequence of 10 items' },
    { condition: collatz.calculatedNumbers[13] === 10, message: 'After calculated, should have it cached' },
    { condition: collatz.getNumberOfIterations(13) === 10, message: 'After calculated number 13, should also return 10 items' },

    // Results from Wikipedia, adjusted to work with the problem proposed that considers the last operation (1)
    { condition: collatz.getNumberOfIterations(97) === 119, message: 'Collatz for number 97 has a sequence of 119 items' },
    { condition: collatz.getNumberOfIterations(871) === 179, message: 'Collatz for number 871 has a sequence of 179 items' },
    { condition: collatz.getNumberOfIterations(6171) === 262, message: 'Collatz for number 6171 has a sequence of 262 items' }
  ];
}

module.exports = run;
