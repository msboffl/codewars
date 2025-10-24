function findMissingLetter(array){
  const n = array.length;
  for(let i = 0; i < n; i++) {
    if(array[i+1].charCodeAt(0) - array[i].charCodeAt(0) > 1) {
      return String.fromCharCode(array[i].charCodeAt(0) + 1);
    }
  }
}