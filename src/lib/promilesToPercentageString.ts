export function promilesToPercentageString(num: number) {
  if (num % 10) return `${(num / 10).toFixed(1)}%`;

  return `${(num / 10).toFixed(0)}%`;
}
