function expandedForm(num) {
  const digits = String(num).split('');  
  const len = digits.length;
  const parts = [];
​
  for (let i = 0; i < len; i++) {
    if (digits[i] !== '0') {
      parts.push(digits[i] + '0'.repeat(len - i - 1));
    }
  }
​
  return parts.join(' + ');
}
​