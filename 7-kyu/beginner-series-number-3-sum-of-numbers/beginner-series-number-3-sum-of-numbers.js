function getSum(a, b) {
  if (a === b) return a;
​
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const count = max - min + 1;
​
  return count * (min + max) / 2;
}
​