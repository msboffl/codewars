function squareOrSquareRoot(array) {
  const ans = [];
  
  for(let i = 0; i < array.length; i++) {
    let num = array[i];
    let root = Math.sqrt(num);
    
    if(Number.isInteger(root)) {
      ans.push(root);
    } else {
      ans.push(num * num);
    }
  }
  
  return ans;
}