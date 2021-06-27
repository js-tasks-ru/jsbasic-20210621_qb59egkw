function factorial(n) {
   if (n === 0 || n === 1) {
    return 1;
  }
  
  let factorialResult = n
  
  for (let i = 1; i < n; ++i) {
    factorialResult = factorialResult * (n - i)   
  }
  // почему не оставить "return factorialResult ? factorialResult : 1"
  // это же короче? или тип читабельность не такая приятная??  
  return factorialResult
}
