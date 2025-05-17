function createBox(m, n) {
  return Array.from({length: n}, (_, i) => Array.from({length: m}, (_, j) => Math.min(...[i + 1, j + 1, n - i, m - j])))
}