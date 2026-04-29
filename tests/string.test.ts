import { capitalize, camelCase, kebabCase, snakeCase, truncate, slugify } from '../js/string-utils';

describe('String Utilities', () => {
  test('capitalize should capitalize first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('camelCase should convert to camelCase', () => {
    expect(camelCase('hello-world')).toBe('helloWorld');
  });

  test('kebabCase should convert to kebab-case', () => {
    expect(kebabCase('helloWorld')).toBe('hello-world');
  });

  test('snakeCase should convert to snake_case', () => {
    expect(snakeCase('helloWorld')).toBe('hello_world');
  });

  test('truncate should truncate string', () => {
    expect(truncate('Hello World', 5)).toBe('Hello...');
    expect(truncate('Hello World', 5, '..')).toBe('Hello..');
  });

  test('slugify should convert to URL-friendly slug', () => {
    expect(slugify('Hello World!')).toBe('hello-world');
  });
});
