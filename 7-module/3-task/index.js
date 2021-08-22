export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps
    this.value = value
    
    this.slider = null

    this.thumb = null 
    this.progress = null

    this.numberSpan = null

    this.loadSlider()
  }
 

  loadSlider() {
    this.slider = document.createElement('div')
    this.slider.classList.add('slider')
    this.slider.innerHTML = this.createHTMLSlider()
         
    this.addOnClickOnSlider()
  }


  createHTMLSlider() {
    return `
      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb" style="left: 50%;">
        <span class="slider__value">2</span>
      </div>

      <!--Заполненная часть слайдера-->
      <div class="slider__progress" style="width: 50%;"></div>

      <!--Шаги слайдера-->
      <div class="slider__steps">
        ${this.createHTMLSpan()}
      </div>
    `
  }

  createHTMLSpan() {
    let result = ``
    for (let i = 0; i < this.steps; i++) { result += `<span id=${i} class="slider__step ${i == 0 ? `slider__step-active` : ``}"></span>\n` } 
      return `
        ${ result }
      `
    }

  addOnClickOnSlider() {
    this.slider.onclick = (e) => {
      this.numberSpan = Math.round( e.offsetX / ( this.slider.offsetWidth / ( this.steps - 1 ) ))
      this.eventOnClickSlider()    
    }
  }

  eventOnClickSlider() {
    this.addElementsSlider()
    this.sliderChange()
    this.sliderValue()
    this.activeValue(this.numberSpan)
    this.generateCustomEvent(this.numberSpan)
  }

  addElementsSlider() {
    this.thumb = document.querySelector('.slider__thumb')
    this.progress = document.querySelector('.slider__progress')
  }
  
  sliderChange() {
    this.thumb.style.left = `${ (100 / (this.steps - 1)) * this.numberSpan }%`
    this.progress.style.width = `${ (100 / (this.steps - 1)) * this.numberSpan }%`
  }
  
  sliderValue() {
    document.querySelector('.slider__value').textContent = this.numberSpan
  }

  activeValue(id) {
    [...document.getElementsByClassName('slider__step')].forEach((e) => {
      if (e.classList.contains('slider__step-active')) {
        e.classList.remove('slider__step-active')
      }
    })

    document.getElementById(`${id}`).classList.add('slider__step-active')
  }

  generateCustomEvent(id) {
    this.slider.dispatchEvent(
      new CustomEvent('slider-change', {
        detail: id,
        bubbles: true 
      })
    )
  }


  get elem() {
    return this.slider
  }
}
