function findUniq(arr) {
  const freq = {};
  
  for(let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  
  for(let key in freq) {
    if(freq[key] === 1) return Number(key);
  }
}
​