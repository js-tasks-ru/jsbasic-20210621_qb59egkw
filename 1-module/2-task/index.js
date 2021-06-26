/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // ваш код...
  // Хотел сделать всё в одно условие, но если name === null , то при name.length вылезет ошибка
  if (name === null) {
    return false
  } else if (name.length < 4 || name.includes(' ')) {
    return false
  }

  return true
  
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
