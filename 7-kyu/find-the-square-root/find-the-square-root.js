function squareRoot(n) {
  if (n == 0) return 0;
  if (n < 0) return Nan;
  
  let x = n;
  let prev = 0;
  
  while(x !== prev) {
    prev = x;
    x = (x + (n / x)) / 2
  }
  
  let res = Math.round(x * 10 ** 5) / 10 ** 5;
  
  return Number(res.toString());
}