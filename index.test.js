const collatzTest = require('./Collatz.test');

const tests = [
  ...collatzTest()
];

console.log(`Executing ${tests.length} test cases.`);
let numberOfFailed = 0;
tests.forEach((testObject) => {
  if (testObject.condition === false) {
    numberOfFailed++;
  }
  console.assert(testObject.condition, testObject.message);
});

if (numberOfFailed === 0) {
  console.log('SUCCESS');
} else {
  console.error(`FAILED ${numberOfFailed} OF ${tests.length}`);
  process.exit(1);
}
