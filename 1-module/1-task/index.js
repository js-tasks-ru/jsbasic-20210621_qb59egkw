function factorial(n) {
  let factorialResult = n

  for (let i = 1; i < n; ++i) {
    factorialResult = factorialResult * (n - i)   
  }
  // Возможно это хитрожопо, но чёт я не понял как иначе это запилить, если факториал === 0. 
  return factorialResult ? factorialResult : 1 
}
