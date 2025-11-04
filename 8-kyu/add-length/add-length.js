function addLength(str) {
  const arr = str.split(" ");
  
  for(let i = 0; i < arr.length; i++) {
    let count = arr[i].length;
    arr[i] = arr[i] + " " + count;
  }
  
  return arr;
}
​