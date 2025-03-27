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
