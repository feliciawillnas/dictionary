function add(a, b) {
  return a + b;
}

// jest.mock("./calculator", () => ({
//   ...jest.requireActual("./calculator"),
//   add: jest.fn(() => 42),
// }));

// function subtract(a, b) {
//   return a - b;
// }

function subtract(a, b) {
  console.log("Blue eyes white dragon");
  console.log("JENSEN");
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function delayedAddition(a, b) {
  return new Promise((resolve) => setTimeout(() => resolve(a + b), 1000));
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  delayedAddition,
};
