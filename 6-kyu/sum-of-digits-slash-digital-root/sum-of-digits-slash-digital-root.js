function digitalRoot(n) {
  if(n < 10) return n;
    
  while (n > 9) {
    let sum = 0;
​
    while (n > 0) { 
      let ld = n % 10;
      sum += ld;
      n = Math.floor(n / 10);
    }
    
    n = sum;
  }
  
  return n;
}