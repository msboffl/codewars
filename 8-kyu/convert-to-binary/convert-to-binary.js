function toBinary(n){
  let bin = "";
  
  while(n > 0) {
    let ld = n % 2;
    bin = ld + bin
    n = Math.floor(n / 2)
  }
  
  return Number(bin);
}