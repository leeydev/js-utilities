// TypeScript Type Definitions
export interface UtilityResult {
  success: boolean;
  timestamp: number;
}

export interface ArrayUtils {
  chunk<T>(array: T[], size: number): T[][];
  unique<T>(array: T[]): T[];
  flatten<T>(array: T[][]): T[];
  difference<T>(arr1: T[], arr2: T[]): T[];
  intersection<T>(arr1: T[], arr2: T[]): T[];
  groupBy<T>(array: T[], key: keyof T): Record<string, T[]>;
}

export interface StringUtils {
  capitalize(str: string): string;
  camelCase(str: string): string;
  kebabCase(str: string): string;
  snakeCase(str: string): string;
  truncate(str: string, length: number, suffix?: string): string;
  slugify(str: string): string;
}

export interface ObjectUtils {
  pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
  omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
  isEmpty(obj: object): boolean;
  deepMerge<T>(target: T, ...sources: Partial<T>[]): T;
}

export interface MathUtils {
  randomBetween(min: number, max: number): number;
  clamp(value: number, min: number, max: number): number;
  round(value: number, decimals?: number): number;
  sum(numbers: number[]): number;
  average(numbers: number[]): number;
  debounce<T>(func: T, wait: number): T;
  throttle<T>(func: T, limit: number): T;
}
