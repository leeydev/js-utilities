import { randomBetween, clamp, round, sum, average, debounce, throttle } from '../js/math-utils';

describe('Math Utilities', () => {
  test('randomBetween should return number in range', () => {
    const result = randomBetween(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });

  test('clamp should clamp value', () => {
    expect(clamp(150, 0, 100)).toBe(100);
    expect(clamp(-5, 0, 100)).toBe(0);
  });

  test('round should round to decimals', () => {
    expect(round(3.14159, 2)).toBe(3.14);
  });

  test('sum should sum numbers', () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });

  test('average should calculate average', () => {
    expect(average([1, 2, 3, 4])).toBe(2.5);
  });

  test('debounce should debounce function', (done) => {
    const fn = jest.fn();
    const debounced = debounce(fn, 100);
    debounced();
    setTimeout(() => {
      expect(fn).toHaveBeenCalledTimes(1);
      done();
    }, 150);
  }, 200);

  test('throttle should throttle function', (done) => {
    const fn = jest.fn();
    const throttled = throttle(fn, 100);
    throttled();
    throttled();
    setTimeout(() => {
      expect(fn).toHaveBeenCalledTimes(1);
      done();
    }, 150);
  }, 200);
});
