import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;

    this.carousel = null
    this.carouselSlider = null
    this.leftArrow = null
    this.rightArrow = null
    this.btnsSliderProductAdd = null
    
    this.carouselInnerWidth = 0
    this.maxSliderWith = null

    this.render() 
  }
  
    
  render() {
    this.carousel = createElement(
      `
        <div class="carousel">
          ${this.renderCarousel()}
        </div>
      `
    )
    this.renderCarouselElements()

    this.checkMaxWidthVivsibilityArrowAndMoveSlider()
    this.arrowsSliderEvents()
    this.onclickEventProductAdd() 
  } 

  renderCarousel() {
    return `
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
    `
  }

  renderCarouselElements() {
    this.carouselSlider = this.carousel.querySelector('.carousel__inner')
    this.leftArrow = this.carousel.querySelector('.carousel__arrow_left')
    this.rightArrow = this.carousel.querySelector('.carousel__arrow_right')
    this.btnsSliderProductAdd = [...this.carousel.querySelectorAll('.carousel__button')]
  }

  checkMaxWidthVivsibilityArrowAndMoveSlider() {
    this.maxSliderWith = this.carouselSlider.offsetWidth * (this.slides.length - 1)
    this.carouselSlider.style.transform = `translateX(-${this.carouselInnerWidth}px)`
    this.checkingVisibilityArrows()
  }

  checkingVisibilityArrows() {
    if (!this.carouselInnerWidth) {
      this.leftArrow.style.display = 'none'        
    } else if (this.carouselInnerWidth >= this.maxSliderWith) {
      this.rightArrow.style.display = 'none'    
    } else {
      this.leftArrow.style.display = ''
      this.rightArrow.style.display = '' 
    }
  }

  arrowsSliderEvents() {
    this.leftArrow.onclick = () => {
      this.carouselInnerWidth -= this.carouselSlider.offsetWidth
      this.checkMaxWidthVivsibilityArrowAndMoveSlider()
    }
    
    this.rightArrow.onclick = () => {
      this.carouselInnerWidth += this.carouselSlider.offsetWidth
      this.checkMaxWidthVivsibilityArrowAndMoveSlider()
    }
  }

  eventProductAdd(el, index) {
    return el.addEventListener('click', () => {
      this.carousel.dispatchEvent(
        new CustomEvent('product-add', {
          detail: this.slides[index].id,
          bubbles: true
        })
      )
    })
  }

  onclickEventProductAdd() {
    this.btnsSliderProductAdd.forEach((element, index) => {
      this.eventProductAdd(element, index)
    })
  }

  get elem() {
    return this.carousel
  }
}
