function dnaStrand(dna){
  let ans = ""
  for(let i = 0; i < dna.length; i++) {
    if(dna[i] == "A") ans += "T";
    if(dna[i] == "T") ans += "A";
    if(dna[i] == "C") ans += "G";
    if(dna[i] == "G") ans += "C";
  }
  
  return ans;
}