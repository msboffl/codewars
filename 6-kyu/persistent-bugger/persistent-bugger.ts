export function persistence(num: number): number {
  if(num < 10) return 0;
  
  let count = 0;
  
  while(num > 9) {
    let product = 1;
    
    while(num > 0) {
      let ld = num % 10;
      product *= ld;
      num = Math.floor(num/10)
    }
    
    num = product
    count++;
  }
  
  return count;
}