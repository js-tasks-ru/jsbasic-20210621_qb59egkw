let calculator = {
  // ваш код
  firstValue: null,
  lastValue: null,
  read(a, b) {  
    this.firstValue = a,
    this.lastValue = b
  },

  sum() {
    return this.firstValue + this.lastValue
  },

  mul() {
    return this.firstValue * this.lastValue
  }
  
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
