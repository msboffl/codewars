function inAscOrder(arr) {
  const n = arr.length;
  for(let i = 0; i < n; i++) {
    if(arr[i] > arr[i+1]) return false
  }
  
  return true;
}