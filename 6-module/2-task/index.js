import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.name = product.name
    this.price = product.price
    this.category = product.category
    this.image = product.image
    this.id = product.id

    this.renderCardsAndEvents()
  }


  renderCardsAndEvents() {
    this.cardElem = createElement(`
      <div class="card">
        ${this.renderCard()}
      </div>
      `
    )

    this.button = this.cardElem.querySelector('.card__button')
    this.onclickEventProductAdd()
  }


  renderCard() {
    return `
    <div class="card__top">
      <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
      <span class="card__price">€${this.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
      <div class="card__title">${this.name}</div>
        <button type="button" class="card__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
    `
  }

  eventProductAdd() {
    return this.cardElem.dispatchEvent(
        new CustomEvent('product-add', {
          detail: this.id,
          bubbles: true
        })
    )
  }

  onclickEventProductAdd() {
    this.button.onclick = () => {
      this.eventProductAdd()
    }
  }


  get elem() {
    return this.cardElem
  }
}
