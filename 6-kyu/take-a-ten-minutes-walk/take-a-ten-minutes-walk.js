function isValidWalk(walk) {
  // Condition 1: Must take exactly 10 minutes
  if (walk.length !== 10) return false;
​
  // Track movement on x and y axis
  let x = 0; // east (+1), west (-1)
  let y = 0; // north (+1), south (-1)
​
  for (let step of walk) {
    if (step === 'n') y++;
    if (step === 's') y--;
    if (step === 'e') x++;
    if (step === 'w') x--;
  }
​
  // Condition 2: Must end at starting point
  return x === 0 && y === 0;
  
}