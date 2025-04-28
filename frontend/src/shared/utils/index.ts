export const formatNumber = (q: number | undefined) => {
  if (!q) return undefined;
  return q.toLocaleString('ru-RU', {
    trailingZeroDisplay: 'stripIfInteger',
  });
};

export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export function getValueByPath(obj: any, path: string): any {
  return path.split('.').reduce((acc, part) => {
    if (acc && typeof acc === 'object') {
      return acc[part];
    }
    return undefined;
  }, obj);
}

export function extractNestedValuesOrFallback<T>(
  items: T[],
  checkPath: string,
  defaultValue: string = '-'
): Array<string> | undefined {
  const hasAnyValue = items.some((item) => {
    const value = getValueByPath(item, checkPath);

    return value !== null && value !== undefined && value !== '';
  });

  if (!hasAnyValue) {
    return undefined;
  }

  return items.map((item) => {
    const value = getValueByPath(item, checkPath);

    return value !== null && value !== undefined && value !== '' ? String(value) : defaultValue;
  });
}
