function duplicateCount(text){
  let lower = text.toLowerCase();
  
  let count = 0;
  let freq = {};
  
  for (let char of lower) {
    freq[char] = (freq[char] || 0) + 1
  }
  
  for(let char in freq) {
    if (freq[char] > 1) count++;
  }
  
  
  return count;
}