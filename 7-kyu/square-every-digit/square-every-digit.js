function squareDigits(num){
  if(num == 0) return 0;
  
  let ans = "";
  while(num > 0) {
    let ld = num % 10;
    let sq = ld * ld
    
    ans = sq + ans;
    
    num = Math.floor(num / 10);
  }
  
  return Number(ans);
}