function truncate(str, maxlength) {
  // ваш код...
  let points = '…'
  if (str.length > maxlength) {
    return `${str.slice(0, maxlength - 1)}${points}`
  } else {
    return str
  }
}
