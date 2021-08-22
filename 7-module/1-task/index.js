import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;

    this.htmlRibbinMenu = null
    this.ribbonInner = null
    this.ribbonArrowRight = null
    this.ribbonArrowLeft = null

    this.visibleArrowLeft = null
    this.visibleArrowRight = null

    this.scrollWidth = null
    this.scrollLeft  = null
    this.clientWidth = null
    this.scrollRight = null

    this.hrefs = null
    this.oldHrefOnClick = null
    
    this.renderRibbonMenu()
  }


  get elem() {
    return this.htmlRibbinMenu
  }


  renderRibbonMenu() {
    this.htmlRibbinMenu = createElement(this.renderHtmlMenu())
    this.renderElements()
    this.addScrollOnArrow()
    this.arrowIsVisible()
    this.addEventScroll()
    this.addClickOnHref()
    this.renderScrollWidth()
  }


  renderHtmlMenu() {
    return `
    <div class="ribbon">
      <!--Кнопка прокрутки влево-->
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      <nav class="ribbon__inner">
      ${this.categories.map((element) => { 
        return `
          <a href="#" class="ribbon__item" data-id="${element.id}">${element.name}</a>
        `
    }).join('')}
        </nav>
        <button class="ribbon__arrow ribbon__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
    `
  }


  renderElements() {
    this.ribbonInner = this.htmlRibbinMenu.querySelector('.ribbon__inner')
    this.ribbonArrowRight = this.htmlRibbinMenu.querySelector('.ribbon__arrow_right')
    this.ribbonArrowLeft = this.htmlRibbinMenu.querySelector('.ribbon__arrow_left')
  }


  addScrollOnArrow() {
    this.ribbonArrowLeft.addEventListener('click', () => {
      // скролл не работает правильно с тестами
      this.ribbonInner.scrollBy(-350, 0)
    })
    this.ribbonArrowRight.addEventListener('click', () => {
      this.ribbonInner.scrollBy(350, 0)
    })
  }


  addEventScroll() {
    this.ribbonInner.addEventListener('scroll', () => {
      this.renderScrollWidth()
      return this.arrowIsVisible()
    })
  }

  renderScrollWidth() {
    this.scrollWidth = this.ribbonInner.scrollWidth
    this.scrollLeft = this.ribbonInner.scrollLeft
    this.clientWidth = this.ribbonInner.clientWidth
    this.scrollRight = this.scrollWidth - this.scrollLeft - this.clientWidth
  }

  arrowIsVisible() {
    // проверит есть ли класс ribbon__arrow_visible и вернет true/false 
    this.visibleArrowLeft = this.ribbonArrowLeft.classList.value.split(' ').includes('ribbon__arrow_visible')
    this.visibleArrowRight = this.ribbonArrowRight.classList.value.split(' ').includes('ribbon__arrow_visible')
    
    if (!this.ribbonInner.scrollLeft) {
      this.ribbonArrowLeft.classList.remove('ribbon__arrow_visible')
    } else if (this.scrollRight < 1) {
      this.ribbonArrowRight.classList.remove('ribbon__arrow_visible')
    } 
    
    if (this.ribbonInner.scrollLeft && !this.visibleArrowLeft) {
      this.ribbonArrowLeft.classList.add('ribbon__arrow_visible')
    } else if (this.scrollRight != 0 && !this.visibleArrowRight) {
      this.ribbonArrowRight.classList.add('ribbon__arrow_visible')
    } 
  }


  addClickOnHref() {
    [...this.htmlRibbinMenu.querySelectorAll('.ribbon__item')].forEach((e) => {
      e.addEventListener('click', (event) => {
        event.preventDefault()
        this.selectionOfASpecificCategory(event.currentTarget, e.dataset.id)
      })
    })
  }

  selectionOfASpecificCategory(element, elementId) {
    this.clickOnHref(element)
    this.ribbonElementSelect(elementId)
  }

  clickOnHref(newHrefOnClick) {
    this.removeOldClassOnHref(newHrefOnClick)
    if (this.oldHrefOnClick === newHrefOnClick) {
      newHrefOnClick.classList.remove('ribbon__item_active')
    } else {
      newHrefOnClick.classList.add('ribbon__item_active')
    }
    this.oldHrefOnClick = newHrefOnClick
  }

  removeOldClassOnHref() {
    if (this.oldHrefOnClick != null && this.oldHrefOnClick.classList.value.split(' ').includes('ribbon__item_active')) {
      this.oldHrefOnClick.classList.remove('ribbon__item_active')
    } 
  }

  ribbonElementSelect(id) {
    this.htmlRibbinMenu.dispatchEvent(
      new CustomEvent('ribbon-select', {
        detail: id,
        bubbles: true
      })
    )
  }
}
