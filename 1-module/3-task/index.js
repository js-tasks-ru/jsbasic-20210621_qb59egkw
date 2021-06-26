function ucFirst(str) {
  let result = str

  if (!result) {
    return result.toUpperCase()
  } 
  
  result = result[0].toUpperCase() + result.slice(1)
  return result
  
}
