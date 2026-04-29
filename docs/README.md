# JS-Utilities Documentation

Complete documentation for the js-utilities library.

## Table of Contents

1. [Installation](#installation)
2. [Array Utilities](#array-utilities)
3. [String Utilities](#string-utilities)
4. [Object Utilities](#object-utilities)
5. [Math Utilities](#math-utilities)

## Installation

```bash
npm install js-utilities
```

## Array Utilities

### chunk(array, size)
Splits an array into chunks of the specified size.

```typescript
import { chunk } from 'js-utilities';

chunk([1, 2, 3, 4, 5], 2);
// [[1, 2], [3, 4], [5]]
```

### unique(array)
Removes duplicate values from an array.

```typescript
import { unique } from 'js-utilities';

unique([1, 2, 2, 3, 3]);
// [1, 2, 3]
```

### flatten(array)
Flattens a nested array.

```typescript
import { flatten } from 'js-utilities';

flatten([[1, 2], [3, 4], [5]]);
// [1, 2, 3, 4, 5]
```

### difference(arr1, arr2)
Returns values from arr1 that are not in arr2.

```typescript
import { difference } from 'js-utilities';

difference([1, 2, 3], [2, 3]);
// [1]
```

### intersection(arr1, arr2)
Returns values that exist in both arrays.

```typescript
import { intersection } from 'js-utilities';

intersection([1, 2, 3], [2, 3, 4]);
// [2, 3]
```

### groupBy(array, key)
Groups array items by a key.

```typescript
import { groupBy } from 'js-utilities';

groupBy(
  [{name: 'Alice', age: 21}, {name: 'Bob', age: 21}],
  'age'
);
// { '21': [{name: 'Alice', age: 21}, {name: 'Bob', age: 21}] }
```

## String Utilities

### capitalize(str)
Capitalizes the first letter of a string.

```typescript
import { capitalize } from 'js-utilities';

capitalize('hello'); // 'Hello'
```

### camelCase(str)
Converts string to camelCase.

```typescript
import { camelCase } from 'js-utilities';

camelCase('hello-world'); // 'helloWorld'
```

### kebabCase(str)
Converts string to kebab-case.

```typescript
import { kebabCase } from 'js-utilities';

kebabCase('helloWorld'); // 'hello-world'
```

### snakeCase(str)
Converts string to snake_case.

```typescript
import { snakeCase } from 'js-utilities';

snakeCase('helloWorld'); // 'hello_world'
```

### truncate(str, length, suffix?)
Truncates string to specified length.

```typescript
import { truncate } from 'js-utilities';

truncate('Hello World', 5); // 'Hello...'
truncate('Hello World', 5, '..'); // 'Hello..'
```

### slugify(str)
Converts string to URL-friendly slug.

```typescript
import { slugify } from 'js-utilities';

slugify('Hello World!'); // 'hello-world'
```

## Object Utilities

### pick(obj, keys)
Picks specified keys from an object.

```typescript
import { pick } from 'js-utilities';

pick({a: 1, b: 2, c: 3}, ['a', 'b']);
// {a: 1, b: 2}
```

### omit(obj, keys)
Omits specified keys from an object.

```typescript
import { omit } from 'js-utilities';

omit({a: 1, b: 2, c: 3}, ['b']);
// {a: 1, c: 3}
```

### isEmpty(obj)
Checks if object is empty.

```typescript
import { isEmpty } from 'js-utilities';

isEmpty({}); // true
isEmpty({a: 1}); // false
```

### deepMerge(target, ...sources)
Deep merges objects.

```typescript
import { deepMerge } from 'js-utilities';

deepMerge({a: 1}, {b: 2});
// {a: 1, b: 2}
```

## Math Utilities

### randomBetween(min, max)
Returns random number between min and max.

```typescript
import { randomBetween } from 'js-utilities';

randomBetween(1, 10); // 1-10
```

### clamp(value, min, max)
Clamps value between min and max.

```typescript
import { clamp } from 'js-utilities';

clamp(150, 0, 100); // 100
```

### round(value, decimals?)
Rounds number to specified decimals.

```typescript
import { round } from 'js-utilities';

round(3.14159, 2); // 3.14
```

### sum(numbers)
Sums all numbers in array.

```typescript
import { sum } from 'js-utilities';

sum([1, 2, 3, 4]); // 10
```

### average(numbers)
Calculates average of numbers.

```typescript
import { average } from 'js-utilities';

average([1, 2, 3, 4]); // 2.5
```

### debounce(func, wait)
Creates debounced function.

```typescript
import { debounce } from 'js-utilities';

const debounced = debounce(() => console.log('Called'), 300);
```

### throttle(func, limit)
Creates throttled function.

```typescript
import { throttle } from 'js-utilities';

const throttled = throttle(() => console.log('Called'), 300);
```
