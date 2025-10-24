function add(a, b) {
  let result = '';
  let carry = 0;
​
  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, '0');
  b = b.padStart(maxLength, '0');
​
  for (let i = maxLength - 1; i >= 0; i--) {
    const sum = Number(a[i]) + Number(b[i]) + carry;
    result = (sum % 10) + result; 
    carry = Math.floor(sum / 10);
  }
​
  if (carry > 0) result = carry + result;
​
  return result;
}
​