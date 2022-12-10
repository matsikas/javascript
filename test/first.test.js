// Import the add() function from the 'add.js' file
const add = require('../add.js');

describe('add()', () => {
  test('adds two numbers', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });

  test('adds two negative numbers', () => {
    const result = add(-1, -2);
    expect(result).toBe(-3);
  });

  test('adds a negative number and a positive number', () => {
    const result = add(-1, 2);
    expect(result).toBe(1);
  });

  test('adds two decimal numbers', () => {
    const result = add(0.1, 0.2);
    expect(result).toBeCloseTo(0.3);
  });
});


