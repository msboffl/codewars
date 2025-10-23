function humanReadable (seconds) {
  const hours = Math.floor(seconds / 3600)
  
  const remainingSeconds = seconds % 3600;
  
  const minutes = Math.floor(remainingSeconds / 60)
  
  const secs = seconds % 60;
  
  const pad = (num) => String(num).padStart(2, '0');
​
  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
  
}