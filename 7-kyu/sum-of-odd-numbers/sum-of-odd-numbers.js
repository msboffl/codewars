function rowSumOddNumbers(n) {
  let sum = 0;
  
  let first = n * (n-1) + 1;
  let last = first + (n-1) * 2;
  
  for(let i = first; i <= last; i += 2) {
    sum += i
  }
      
  return sum;
}