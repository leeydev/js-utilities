import { chunk, unique, flatten, difference, intersection, groupBy } from '../js/array-utils';

describe('Array Utilities', () => {
  test('chunk should split array into chunks', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test('unique should remove duplicates', () => {
    expect(unique([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
  });

  test('flatten should flatten nested array', () => {
    expect(flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
  });

  test('difference should return values not in second array', () => {
    expect(difference([1, 2, 3], [2, 3])).toEqual([1]);
  });

  test('intersection should return common values', () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  test('groupBy should group by key', () => {
    const result = groupBy(
      [{name: 'Alice', age: 21}, {name: 'Bob', age: 21}],
      'age'
    );
    expect(result['21']).toHaveLength(2);
  });
});
