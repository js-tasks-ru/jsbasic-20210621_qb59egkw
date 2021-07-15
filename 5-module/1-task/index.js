function hideSelf() {
  // ваш код...
  const button = document.querySelector('.hide-self-button')

  button.addEventListener('click', (e) => {
    e.currentTarget.hidden = true
  }, {once: true})
}
