function findMissing(arr) {
  // Determine the common difference
  const d = Math.min(arr[1]-arr[0], arr[2]-arr[1]);
​
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i+1] - arr[i] !== d) {
      return arr[i] + d;
    }
  }
​
  // Should never reach here
  return null;
}