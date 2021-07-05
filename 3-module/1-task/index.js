function namify(users) {
  // ваш код...
  let arr = []
  users.forEach(user => {
    arr.push(user.name)
  })

  return arr
}
