function squareDigits(num){
  let res = "";
  
  while(num > 0) {
    let ld = num % 10;
    let sq = ld * ld;
    res = sq + res;
    num = Math.floor(num / 10);
  }
  
  return Number(res);
}