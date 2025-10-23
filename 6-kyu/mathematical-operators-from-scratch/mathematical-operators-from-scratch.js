const add = (x, y) => {
  while (y !== 0) {
    const carry = (x & y) << 1;
    x = x ^ y;
    y = carry;
  }
  return x;
};
​
const subtract = (x, y) => {
  return add(x, add(~y, 1));
};
​
const multiply = (x, y) => {
  const isNegative = (x < 0) ^ (y < 0);
  x = Math.abs(x);
  y = Math.abs(y);
​
  let result = 0;
  while (y > 0) {
    if (y & 1) result = add(result, x);
    x <<= 1;
    y >>= 1;
  }
​
  return isNegative ? add(~result, 1) : result;
};
​