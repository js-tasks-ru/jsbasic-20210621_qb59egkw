/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = [...rows] 

    this.table = document.createElement('table')

    this.table.innerHTML = this.renderTable()
    this.removeThisLineElement()
  }

  
  renderTable() {
    return `
    <table>
      <thead>
          <tr>
              <th>Имя</th>
              <th>Возраст</th>
              <th>Зарплата</th>
              <th>Город</th>
              <th></th>
          </tr>
      </thead>
      <tbody>
        ${this.rows.map(row => `
            <tr>
              <td>${row.name}</td>
              <td>${row.age}</td>
              <td>${row.salary}</td>
              <td>${row.city}</td>
              <td><button>X</button></td>
            </tr>
          `).join('')
        }
      </tbody>
    </table>
    `
  }

  removeThisLineElement() {
    this.table.querySelectorAll('button').forEach((e) => {
      e.addEventListener('click', (event) => {
        return event.currentTarget.parentElement.parentElement.remove()
      }, { once : true })
    })
  }

  get elem() {
    return this.table
  }
}
