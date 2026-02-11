function toBinary(n){
 //Be Ready for Large Numbers. Happy Coding ^_^
  
  let binary = "";
  
  if(n === 0) return "0";
  
  // positive
  if (n > 0) {
    while(n > 0) {
      let ld = n % 2;
      binary = ld + binary;
      n = Math.floor(n / 2);
    }
​
    return binary;
  }
  
  // negative
  n = 2 ** 32 + n;
 while(n > 0) {
    let ld = n % 2;
    binary = ld + binary;
    n = Math.floor(n / 2);
  }
​
  return binary;
}