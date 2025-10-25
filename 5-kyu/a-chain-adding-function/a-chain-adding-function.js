function add(n){
  const sum = (x) => add(n + x);
​
  sum.valueOf = () => n;
  sum.toString = () => n;
​
  return sum;
}