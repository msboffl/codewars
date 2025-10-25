function determinant(matrix) {
  const n = matrix.length;
​
  // Base case: 1x1 matrix
  if (n === 1) return matrix[0][0];
​
  // Base case: 2x2 matrix
  if (n === 2) {
    return matrix[0][0]*matrix[1][1] - matrix[0][1]*matrix[1][0];
  }
​
  // Recursive case: n x n matrix
  let det = 0;
  for (let col = 0; col < n; col++) {
    // Create minor by removing first row and current column
    const minor = matrix.slice(1).map(row => row.filter((_, c) => c !== col));
    // Alternate signs: + - + - ...
    det += (col % 2 === 0 ? 1 : -1) * matrix[0][col] * determinant(minor);
  }
​
  return det;
}