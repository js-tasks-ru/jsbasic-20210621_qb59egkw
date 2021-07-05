function showSalary(users, age) {
  // ваш код...
  
  const salarysAndNames = users.filter(user => user.age <= age)
                                  .map(user => { return `${user.name}, ${user.balance}` })
                                  .join('\n')

  return salarysAndNames

}
