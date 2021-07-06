function getMinMax(str) {
  // ваш код...
  const arrNumber = []
  
  str.split(' ').join().split(',').filter(value => Number(value)).map(value => {
    arrNumber.push(Number(value))
  })

  const result = {
    min: Math.min(...arrNumber),
    max: Math.max(...arrNumber),
  }

  return result
}
