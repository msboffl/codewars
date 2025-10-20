function moveZeros(arr) {
  const n = arr.length;
  
  let count = 0;
  for(let i = 0; i < n; i++) {
    if(arr[i] !== 0) {
      arr[count++] = arr[i]
    }
  }
  
  for(let i = count; i < n; i++) {
    arr[count++] = 0
  }
  
  return arr;
}