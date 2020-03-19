const Collatz = require('./Collatz');

function main() {
  const collatz = new Collatz();

  let mostIteratedValue = 0;
  let maxIterations = 0;
  for (let i = 1; i < 1000000; i++) {
    const currentNumberOfIterations = collatz.getNumberOfIterations(i);
    if (currentNumberOfIterations > maxIterations) {
      mostIteratedValue = i;
      maxIterations = currentNumberOfIterations;
    }
  }

  console.log('The most iterated number is', mostIteratedValue, 'with', maxIterations, 'iterations');
}

main();
