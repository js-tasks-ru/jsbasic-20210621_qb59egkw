function ucFirst(str) {
  let result = str

  if (!result) {
    return result
  }

  return result[0].toUpperCase() + result.slice(1)
}
