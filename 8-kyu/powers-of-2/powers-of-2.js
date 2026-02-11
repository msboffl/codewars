function powersOfTwo(n){
  let ans = [];
  
  for(let i = 0; i <= n; i++) {
    ans.push(2 ** i);
  }
  
  return ans;
}