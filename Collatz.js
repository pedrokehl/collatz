class Collatz {
  constructor() {
    this.calculatedNumbers = {};
  }

  getNumberOfIterations(valueInformed) {
    if (valueInformed <= 0 || !Number.isInteger(valueInformed)) {
      throw new Error('Only positive integers allowed');
    }

    let currentValue = valueInformed;
    let count = 1;

    while (currentValue > 1) {
      currentValue = this.calculateSingleIteration(currentValue);

      if (this.calculatedNumbers[currentValue]) {
        count += this.calculatedNumbers[currentValue];
        break;
      }
      count += 1;
    }
    this.calculatedNumbers[valueInformed] = count;
    return count;
  }

  calculateSingleIteration(n) {
    if (n % 2 === 0) {
      return n / 2;
    } else {
      return n * 3 + 1;
    }
  }
}

module.exports = Collatz;
