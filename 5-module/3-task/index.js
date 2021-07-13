function initCarousel() {
  // ваш код...
  const buttonArrowRight = document.querySelector('.carousel__arrow_right')
  const buttonArrowLeft = document.querySelector('.carousel__arrow_left')

  const carouselInner = document.querySelector('.carousel__inner')

  let carouselInnerWidth = 0
  const maxCarouselInnerWidth = carouselInner.offsetWidth * 3


  const functionButtonArrowRight = () => {
    carouselInnerWidth += carouselInner.offsetWidth 
    carouselInner.style.transform = `translateX(-${carouselInnerWidth}px)`
    checkingVisibilityArrows()

  } 

  const functionButtonArrowLeft = () => {
    carouselInnerWidth -= carouselInner.offsetWidth 
    carouselInner.style.transform = `translateX(-${carouselInnerWidth}px)`    
    checkingVisibilityArrows()
  } 

  const checkingVisibilityArrows = () => {
    if (carouselInnerWidth <= 0) {
      buttonArrowLeft.style.display = 'none'        
    } else if (carouselInnerWidth >= maxCarouselInnerWidth) {
      buttonArrowRight.style.display = 'none'    
    } else {
      buttonArrowLeft.style.display = ''
      buttonArrowRight.style.display = '' 
    }
  }


  buttonArrowRight.addEventListener('click', functionButtonArrowRight)
  buttonArrowLeft.addEventListener('click', functionButtonArrowLeft)

  checkingVisibilityArrows()

}
