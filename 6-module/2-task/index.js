import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this._name = product.name
    this._price = product.price
    this._category = product.category
    this._image = product.image
    this._id = product.id

    this._cardElem = document.createElement('div')
    this._cardElem.classList.add('card')
    this._cardElem.innerHTML = this._renderCard()

    this._button = this._cardElem.querySelector('.card__button')
    this._eventBtn()
  }

  _renderCard() {
    return `
    <div class="card__top">
      <img src="/assets/images/products/${this._image}" class="card__image" alt="product">
      <span class="card__price">€${this._price.toFixed(2)}</span>
    </div>
    <div class="card__body">
      <div class="card__title">${this._name}</div>
        <button type="button" class="card__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
    `
  }

  _eventBtn() {
    this._button.onclick = () => {
      this._cardElem.dispatchEvent(new CustomEvent('product-add', {
        detail: this._id,
        bubbles: true
      }))
    }
  }

  get elem() {
    return this._cardElem
  }
}
