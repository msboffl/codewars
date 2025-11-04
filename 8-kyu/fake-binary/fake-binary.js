function fakeBin(x) {
  let str = "";
  for (let i = 0; i < x.length; i++) {
    let d = Number(x[i]);
    str += d < 5 ? '0' : '1';
  }
  return str;
}
​