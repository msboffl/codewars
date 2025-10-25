function dblLinear(n) {
  let u = [1];
  let i2 = 0; 
  let i3 = 0; 
​
  while (u.length <= n) {
    const next2 = 2 * u[i2] + 1;
    const next3 = 3 * u[i3] + 1;
​
    const next = Math.min(next2, next3);
    u.push(next);
​
    if (next === next2) i2++;
    if (next === next3) i3++;
  }
​
  return u[n];
}
​
// Example
console.log(dblLinear(10)); // 22
​