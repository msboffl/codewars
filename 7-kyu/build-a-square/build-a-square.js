function generateShape(integer){
  let ans = "";
  
  for(let i = 1; i <= integer; i++) {
    for(let j = 1; j <= integer; j++) {
      ans += "+"
    }
    
    ans += "\n"
  }
  return ans.trimEnd();
}