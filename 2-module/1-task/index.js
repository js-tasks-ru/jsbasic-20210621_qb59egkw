function sumSalary(salaries) {
  // ваш код...
  // NaN исключается при сравнении 

  let sumSalaryResult = 0

  for (let key in salaries) {
    if (salaries[key] != Infinity && salaries[key] != -Infinity && salaries[key] > 0 ) {
      sumSalaryResult += salaries[key]
    }
  }

  return sumSalaryResult
}
