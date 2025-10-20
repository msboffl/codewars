function findNeedle(haystack) {
  const n = haystack.length;
  
  for(let i = 0; i < n; i++) {
    if(haystack[i] === 'needle') {
      return `found the needle at position ${i}`
    }
  }
}