// String Utilities - JavaScript Implementation
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function camelCase(str: string): string {
  return str.replace(/[-_]([a-z])/g, (_, group) => group.toUpperCase());
}

export function kebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function snakeCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}

export function truncate(str: string, length: number, suffix = '...'): string {
  return str.length > length ? str.substring(0, length) + suffix : str;
}

export function slugify(str: string): string {
  return str.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
