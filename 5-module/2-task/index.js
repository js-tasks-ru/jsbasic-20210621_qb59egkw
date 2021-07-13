function toggleText() {
  // ваш код...
  const button = document.querySelector('.toggle-text-button')
  const div = document.querySelector('#text')

  let hidden = false

  button.addEventListener('click', () => {
    hidden = !hidden
    div.hidden = hidden
  })
}
