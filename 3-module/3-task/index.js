function camelize(str) {
  // ваш код...
  const correctedString = str.split('-').map((value, index) => {  
    if (index > 0) {
      return value[0].toUpperCase() + value.slice(1)
    }
    
    return value
  }).join('')

  return correctedString
}
