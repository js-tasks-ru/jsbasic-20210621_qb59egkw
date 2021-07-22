import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;

    this._carouselSlider = null
    this._leftArrow = null
    this._rightArrow = null
    this._carouselInnerWidth = 0

    this._carousel = document.createElement('div')
    this._carousel.classList.add('carousel')

    this._render() 
    this.elem = this._carousel
  }
  
    
  _render() {
    this._carousel.innerHTML = this._renderCarousel()

    this._carouselSlider = this._carousel.querySelector('.carousel__inner')
    this._leftArrow = this._carousel.querySelector('.carousel__arrow_left')
    this._rightArrow = this._carousel.querySelector('.carousel__arrow_right')
    
    this._checkingVisibilityArrows()
    this._arrowSlider()
    this._eventBtnAdd() 
  } 

  _eventBtnAdd() {
    this._buttonProductAdd = [...this._carousel.querySelectorAll('.carousel__button')]
      this._buttonProductAdd.map((element, index) => {
        element.addEventListener('click', () => {
          this._carousel.dispatchEvent(
            new CustomEvent('product-add', {
              detail: this.slides[index].id,
              bubbles: true
        }))
      })
    })
  }

  _arrowSlider() {
    this._leftArrow.onclick = () => {
      this._maxSliderWith = this._carouselSlider.offsetWidth * (this.slides.length - 1)
      this._carouselInnerWidth -= this._carouselSlider.offsetWidth
      this._carouselSlider.style.transform = `translateX(-${this._carouselInnerWidth}px)`
      this._checkingVisibilityArrows()
    }
    
    this._rightArrow.onclick = () => {
      this._maxSliderWith = this._carouselSlider.offsetWidth * (this.slides.length - 1)
      this._carouselInnerWidth += this._carouselSlider.offsetWidth
      this._carouselSlider.style.transform = `translateX(-${this._carouselInnerWidth}px)`
      this._checkingVisibilityArrows()
    }
  }

  _checkingVisibilityArrows() {
      if (this._carouselInnerWidth <= 0) {
        this._leftArrow.style.display = 'none'        
      } else if (this._carouselInnerWidth >= this._maxSliderWith) {
        this._rightArrow.style.display = 'none'    
      } else {
        this._leftArrow.style.display = ''
        this._rightArrow.style.display = '' 
      }
  }

  _renderCarousel() {
    return `
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>

      <div class="carousel__inner">
        ${this.slides.map((e) => {
          return `
          <div class="carousel__slide" data-id="${e.id}">
            <img src="/assets/images/carousel/${e.image}" class="carousel__img" alt="slide">
            <div class="carousel__caption">
              <span class="carousel__price">€${e.price.toFixed(2)}</span>
              <div class="carousel__title">${e.name}</div>
              <button type="button" class="carousel__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
            </div>
          </div>`
        }).join('')}
      </div>
    </div>
    `
  }
}
