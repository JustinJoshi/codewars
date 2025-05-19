function pernicious(n, arr = []){
  const isPrime = num => {
    if (num < 2) return false
    for (let i = 2; i <= num / 2; i++)
      if (num % i == 0) return false
    return true
  }
 
  for (let i = 2; i <= n; i++)
    if (isPrime(i.toString`2`.replace(/0/g, '').length)) arr.push(i)
  return (!arr.length) ? 'No pernicious numbers' : arr
}