function sumSalary(salaries) {
  // ваш код...
  // NaN исключается при сравнении 

  let sumSalaryResult = 0
  for (let key in salaries) {
    if (Number.isFinite(salaries[key])) {
      sumSalaryResult += salaries[key]
    }
  }

  return sumSalaryResult
}
