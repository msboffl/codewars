function sumOfDivided(lst) {
  const sums = {};
​
  for (const num of lst) {
    const n = Math.abs(num);
    const primes = new Set();
​
    // Factorize n
    let x = n;
    for (let i = 2; i*i <= x; i++) {
      if (x % i === 0) {
        primes.add(i);
        while (x % i === 0) x /= i;
      }
    }
    if (x > 1) primes.add(x); // remaining prime factor
​
    // Add number to each prime's sum
    for (const p of primes) {
      sums[p] = (sums[p] || 0) + num;
    }
  }
​
  // Prepare result array, sorted by prime
  return Object.keys(sums)
               .map(k => [Number(k), sums[k]])
               .sort((a,b) => a[0] - b[0]);
}