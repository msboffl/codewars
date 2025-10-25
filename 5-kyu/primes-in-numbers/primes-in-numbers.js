function primeFactors(n){
    let result = '';
  let divisor = 2;
​
  while (n > 1) {
    let count = 0;
    while (n % divisor === 0) {
      n /= divisor;
      count++;
    }
    if (count > 0) {
      result += `(${divisor}${count > 1 ? `**${count}` : ''})`;
    }
    divisor++;
    if (divisor * divisor > n) {
      if (n > 1) {
        result += `(${n})`;
        break;
      }
    }
  }
​
  return result;
}