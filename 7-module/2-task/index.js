import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.body = null
    this.modalWindow = null
    this.modalTitle = null
    this.modalBody = null
    this.modalInner = null
    this.modalCloseX = null

    

    this.startRenderModal()
  }

  startRenderModal() {
    this.modalWindow = createElement(this.renderModalWindow())
    this.body = document.body
    this.getModalElements()
    this.addClickOnX()
    this.addEventCloseModelOnEsc()
  }

  getModalElements() {
    this.modalTitle = this.modalWindow.querySelector('.modal__title')
    this.modalBody = this.modalWindow.querySelector('.modal__body')
    this.modalInner = this.modalWindow.querySelector('.modal__inner')
    this.modalCloseX = this.modalWindow.querySelector('.modal__close')
  }

  addClickOnX() {
    this.modalCloseX.addEventListener('click', () => {
      return this.close()
    }, { once: true })
  }

  addEventCloseModelOnEsc() {
    document.body.addEventListener('keydown', (event) => {
      this.closeOnEsc(event.code)
      }, { once: true })
  }

  closeOnEsc(key) {
    if (key === 'Escape') {
      this.close()
    }
  }

  open = () => {
    document.body.classList.add('is-modal-open')
    document.body.append(this.modalWindow)
  }

  close() {
    document.body.classList.toggle('is-modal-open')
    if (Boolean(document.body.querySelector('.modal'))) {
      return document.body.querySelector('.modal').remove()
    }
  }

  setTitle(title) {
    this.modalTitle.textContent = String(title)
  }

  setBody(node) {
    let modalBody = document.createElement('div')
    modalBody.append(node)
    modalBody.classList.add('modal__body')
    this.modalWindow.querySelector('.modal__body').remove()
    this.modalWindow.querySelector('.modal__inner').append(modalBody)
  }
 

  renderModalWindow() {
    return `
      <div class="container">
        <div class="modal">
          <div class="modal__overlay"></div>
          <div class="modal__inner">
            <div class="modal__header">
              <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
              </button>
              <h3 class="modal__title">
                Вот сюда нужно добавлять заголовок
              </h3>
            </div>
            <div class="modal__body">
              A сюда нужно добавлять содержимое тела модального окна
            </div>
          </div>
        </div>
      </div>
      `
    }
  }
  