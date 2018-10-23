// Please note I have used a zero-based indexed
// 0 index = 0 fib
// 1 index = 1 fib
// 2 index = 1 fib
// 3 index = 2 fib
// 4 index = 3 fib
// 5 index = 5 fib
// and so on
// so slightly different input / outputs than suggested table

const recursive = require('./recursive');

test('recursive', () => {
  expect(recursive(0)).toBe(0);
  expect(recursive(3)).toBe(2);
  expect(recursive(5)).toBe(5);
  expect(recursive(7)).toBe(13);
  expect(recursive(9)).toBe(34);  
});

