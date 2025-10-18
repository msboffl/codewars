export function flip(dir: string, arr: number[]): number[] {
  // Your code here
  if(dir === 'R') {
    return arr.sort((a, b) => a - b);
  }
  return arr.sort((a, b) => b - a);;
}