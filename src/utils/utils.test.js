// src/utils.test.js
import { sum } from './utils';

test('sum adds two numbers correctly', () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(-1, 1)).toBe(0);
});
