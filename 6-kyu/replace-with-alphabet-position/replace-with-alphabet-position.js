function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split('')
    .filter(ch => ch >= 'a' && ch <= 'z')
    .map(ch => ch.charCodeAt(0) - 96)
    .join(' ');
}