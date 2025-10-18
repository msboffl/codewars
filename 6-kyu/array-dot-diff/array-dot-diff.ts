export function arrayDiff(a: number[], b: number[]): number[] {
  const setB = new Set(b);
//   console.log(setB);
  return a.filter(x => !setB.has(x));
}
​