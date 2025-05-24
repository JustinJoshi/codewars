function makeLatinSquare(n) {
  let array = Array.from({length:n},()=>Array(n).fill(0))
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      array[j][i] = (i + j )% n + 1
    }
  }
  return array
}