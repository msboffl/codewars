function grow(x){
  return x.reduce((acc, val) => val * acc, 1);
}