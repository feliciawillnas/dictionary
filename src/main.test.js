const { add, subtract, multiply, divide, delayedAddition } = require("./main");

const a = 10;
const b = 5;

describe("addition", () => {
  // add
  test("add", () => {
    expect(add(a, b)).toBe(a + b);
  });

  // mock
  // test("add (mocked)", () => {
  //   expect(add(a, b)).toBe(42);
  // });

  // async
  test("async test", async () => {
    await expect(delayedAddition(a, b)).resolves.toBe(a + b);
  });
});

test("subtract", () => {
  expect(subtract(a, b)).toBe(a - b);
});

test("multiply", () => {
  expect(multiply(a, b)).toBe(a * b);
});

test("divide", () => {
  expect(divide(a, b)).toBe(a / b);
});
