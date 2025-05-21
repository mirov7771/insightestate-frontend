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

export async function copyToClipboard(text: string): Promise<boolean> {
  if (!text) return false;

  try {
    // ✅ Современный API (предпочтительный способ)
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      await navigator.clipboard.writeText(text);
      return true;
    }

    // 🧾 Фолбэк для старых браузеров / iOS WebView и т.п.
    const textarea = document.createElement('textarea');

    textarea.value = text;

    // предотвращаем автоскролл на мобильных устройствах
    textarea.style.position = 'fixed';
    textarea.style.top = '0';
    textarea.style.left = '0';
    textarea.style.width = '1px';
    textarea.style.height = '1px';
    textarea.style.padding = '0';
    textarea.style.border = 'none';
    textarea.style.outline = 'none';
    textarea.style.boxShadow = 'none';
    textarea.style.background = 'transparent';

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    const success = document.execCommand('copy');

    document.body.removeChild(textarea);

    return success;
  } catch (error) {
    console.error('Clipboard copy failed:', error);
    return false;
  }
}
