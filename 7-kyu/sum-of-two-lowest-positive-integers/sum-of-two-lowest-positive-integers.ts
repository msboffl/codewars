export function sumTwoSmallestNumbers(numbers: number[]): number {
  let first = +Infinity;
  let second = +Infinity;
​
  for (let num of numbers) {
    if (num <= first) {
      second = first;
      first = num;
    } else if (num < second) {
      second = num;
    }
  }
​
  return first + second;
}
​