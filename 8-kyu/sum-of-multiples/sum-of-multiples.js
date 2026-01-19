function sumMul(n,m){
//your idea here
  if(m <= 0) return "INVALID";
  
  let sum = 0;
  for(let i = n; i < m; i += n) {
    sum += i;
  }
  
  return sum;
}