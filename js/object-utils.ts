// Object Utilities - JavaScript Implementation
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach(key => { (result as any)[key] = obj[key]; });
  return result;
}

export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj } as any;
  keys.forEach(key => delete result[key]);
  return result as Omit<T, K>;
}

export function isEmpty(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

export function deepMerge<T extends object>(target: T, ...sources: Partial<T>[]): T {
  const result = { ...target } as any;
  for (const source of sources) {
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
          result[key] = deepMerge(result[key] || {}, source[key]);
        } else {
          result[key] = source[key];
        }
      }
    }
  }
  return result as T;
}
