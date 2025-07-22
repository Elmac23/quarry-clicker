export function getSpriteId(percentage: number) {
  if (percentage < 15) return 4;
  if (percentage < 25) return 3;

  if (percentage < 50) return 2;

  if (percentage < 75) return 1;
  return 0;
}
