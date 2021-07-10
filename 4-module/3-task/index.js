function highlight(table) {
  // ваш код...

    
  for (let i = 1; i < table.rows.length; i++) {

    const rowTr = table.rows[i]
    
    const age = Number(rowTr.cells[1].textContent)
    const gender = rowTr.cells[2].textContent
    const status = rowTr.cells[3]
    
    if (age < 18) {
      rowTr.style.textDecoration = 'line-through'
    }

    gender == "m" ? rowTr.classList.add('male') : rowTr.classList.add('female')
    

    if (status.getAttribute('data-available') !== null) {
      status.dataset.available === "true" ? rowTr.classList.add('available') : rowTr.classList.add('unavailable')
    } else {
      rowTr.hidden = true
    }
  }
}
