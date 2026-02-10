function nearestSq(n) {
  let root = Math.sqrt(n);
  
  let lower = Math.floor(root);
  let upper = Math.ceil(root);
  
  let lowerSq = lower * lower;
  let upperSq = upper * upper;
  
  if (n - lowerSq <= upperSq - n) {
    return lowerSq;
  } else {
    return upperSq;
  }
}
​