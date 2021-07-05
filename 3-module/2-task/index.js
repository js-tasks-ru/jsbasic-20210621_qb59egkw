function filterRange(arr, a, b) {
  // ваш код...
  const newArr = arr.filter(value => {
    return value >= a && value <= b
  })
  
  return newArr
}
