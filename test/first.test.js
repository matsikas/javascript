// Import the add() function from the 'add.js' file
const add = require('../add.js');

test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
