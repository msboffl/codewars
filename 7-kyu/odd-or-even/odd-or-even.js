function oddOrEven(array) {
  const n = array.length;
  
  let sum = 0;
  for(let i = 0; i < n; i++) {
    sum += array[i]
  }
  
  return sum % 2 === 0 ? 'even': 'odd';
}