import { pick, omit, isEmpty, deepMerge } from '../js/object-utils';

describe('Object Utilities', () => {
  test('pick should pick specified keys', () => {
    expect(pick({a: 1, b: 2, c: 3}, ['a', 'b'])).toEqual({a: 1, b: 2});
  });

  test('omit should omit specified keys', () => {
    expect(omit({a: 1, b: 2, c: 3}, ['b'])).toEqual({a: 1, c: 3});
  });

  test('isEmpty should check empty object', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({a: 1})).toBe(false);
  });

  test('deepMerge should deep merge objects', () => {
    expect(deepMerge({a: 1}, {b: 2})).toEqual({a: 1, b: 2});
  });
});
