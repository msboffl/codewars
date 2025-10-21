function findAverage(array) {
  const n = array.length;
  if(n === 0) return 0;
  
  let avg = 0;
  let sum = 0, count = 0
  for(let i = 0; i < n; i++) {
    sum += array[i]
    count++;
  }
  return sum / count;
}