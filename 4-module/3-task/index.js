function highlight(table) {
  // ваш код...

    
  for (let i = 1; i < table.rows.length; i++) {

    const rowTr = table.rows[i]

    const status = rowTr.lastElementChild
    const gender = rowTr.lastElementChild.previousElementSibling.textContent
    const age = rowTr.firstElementChild.nextElementSibling.textContent
    

    Number(age) < 18 ? rowTr.style.textDecoration = 'line-through' : undefined
    gender == "m" ? rowTr.classList.add('male') : rowTr.classList.add('female')
    
    if (status.getAttribute('data-available') !== null) {
      status.dataset.available === "true" ? rowTr.classList.add('available') : rowTr.classList.add('unavailable')
    } else {
      rowTr.hidden = true
    }
  }
}
