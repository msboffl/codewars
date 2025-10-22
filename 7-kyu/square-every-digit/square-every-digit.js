function squareDigits(num){
  let digit = ''
  
  while(num > 0) {
    let ld = num % 10;
    digit = (ld * ld) + digit
    num = Math.floor(num / 10);
  }
  
  return Number(digit);
}