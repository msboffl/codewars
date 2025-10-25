function lastDigit(n, m) {
  // Special case: 0^0 is defined as 1
  if (n === 0n && m === 0n) return 1n;
​
  // If exponent is 0, result is 1
  if (m === 0n) return 1n;
​
  // Last digit of the base
  const lastDigitN = n % 10n;
​
  // Build the cycle of last digits
  const cycle = [lastDigitN];
  let next = (lastDigitN * lastDigitN) % 10n;
  while (!cycle.includes(next)) {
    cycle.push(next);
    next = (next * lastDigitN) % 10n;
  }
​
  // Determine the index in the cycle
  const cycleLength = BigInt(cycle.length);
  let index = m % cycleLength;
  if (index === 0n) index = cycleLength;
  return cycle[Number(index - 1n)];
}