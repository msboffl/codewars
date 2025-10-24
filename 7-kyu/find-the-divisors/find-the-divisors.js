function divisors(n) {
  if(n < 2) return `${n} is prime`;
  
  const result = [];
​
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }
​
  return result.length ? result : `${n} is prime`;
}