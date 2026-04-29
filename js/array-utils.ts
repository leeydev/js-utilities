// Array Utilities - JavaScript Implementation
export function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}

export function flatten<T>(array: T[][] | T[][][]): T[] {
  return array.reduce((acc: T[], val) => acc.concat(val as any), [] as T[]);
}

export function difference<T>(arr1: T[], arr2: T[]): T[] {
  const set2 = new Set(arr2);
  return arr1.filter(x => !set2.has(x));
}

export function intersection<T>(arr1: T[], arr2: T[]): T[] {
  const set2 = new Set(arr2);
  return arr1.filter(x => set2.has(x));
}

export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((acc, item) => {
    const groupKey = String(item[key]);
    (acc[groupKey] = acc[groupKey] || []).push(item);
    return acc;
  }, {} as Record<string, T[]>);
}
