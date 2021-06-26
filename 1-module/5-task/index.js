function truncate(str, maxlength) {
  // ваш код...
  const points = '…'

  if (str.length > maxlength) {
    return `${str.slice(0, maxlength - 1)}${points}`
  }
   
  return str
  
}
