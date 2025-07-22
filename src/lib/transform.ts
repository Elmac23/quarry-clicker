type RangeTuple = [number, number];

export function transform(
  source: RangeTuple,
  result: RangeTuple,
  value: number
) {
  const targetValue =
    ((value - source[0]) * (result[1] - result[0])) / (source[1] - source[0]) +
    result[0];

  return Math.floor(targetValue);
}
