export function mergeIntMaps<T>(m1: Map<T, number>, m2: Map<T, number>) {
  for (const [key, value] of m1.entries()) {
    if (m2.has(key)) {
      const valueAtM2 = m2.get(key) as number;
      m2.set(key, value + valueAtM2);
    } else {
      m2.set(key, value);
    }
  }
  return m2;
}
