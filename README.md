# JS Utilities

![npm](https://img.shields.io/npm/v/js-utilities)
![Downloads](https://img.shields.io/npm/dm/js-utilities)
![License](https://img.shields.io/npm/l/js-utilities)

A comprehensive JavaScript utility library with TypeScript support.

## Features

- ✅ Zero dependencies
- 🚀 Tree-shakeable
- 📝 Written in TypeScript
- 🧪 100% test coverage
- 📦 Works in Node.js and Browser

## Installation

```bash
npm install js-utilities
```

## Usage

```typescript
import { chunk, unique, capitalize } from 'js-utilities';

chunk([1,2,3,4,5], 2); // [[1,2],[3,4],[5]]
unique([1,2,2,3,3]); // [1,2,3]
capitalize('hello'); // 'Hello'
```

## API

### Array Utilities
- `chunk(array, size)` - Split array into chunks
- `unique(array)` - Remove duplicates
- `flatten(array)` - Flatten nested arrays

### String Utilities  
- `capitalize(str)` - Capitalize first letter
- `camelCase(str)` - Convert to camelCase

### Object Utilities
- `pick(obj, keys)` - Pick specific keys from object

### Math Utilities
- `randomBetween(min, max)` - Random number in range
- `clamp(value, min, max)` - Clamp value between min and max

## Testing

```bash
npm test
```

## Contributing

Pull requests welcome!

## License

MIT
