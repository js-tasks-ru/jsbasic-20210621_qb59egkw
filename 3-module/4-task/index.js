function showSalary(users, age) {
  // ваш код...
  let salarysAndNames = []
  
  users.forEach(user => {
    user.age <= age ? salarysAndNames.push(`${user.name}, ${user.balance}`) : undefined
  });

  return salarysAndNames.join('\n')

}
