export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps
    this.value = value
    
    this.slider = null

    this.thumb = null 
    this.progress = null

    this.numberSpan = null

    this.left = null

    this.loadSlider()
  }
  
  loadSlider() {
    this.slider = document.createElement('div')
    this.slider.classList.add('slider')
    this.slider.innerHTML = this.createHTMLSlider()
         
    
    this.addElementsSlider()
    this.addOnClickOnSlider()
    this.addDragAndDropEvent()
  }


  addDragAndDropEvent() {
    this.thumb.ondragstart = () => ( false )
    
    this.thumb.addEventListener('pointerdown', () => {
      this.slider.classList.add('slider_dragging')
      
      const onMove = (e) => {
        this.left =  e.clientX - this.slider.getBoundingClientRect().left
        let leftRelative = this.left / this.slider.offsetWidth

        if (leftRelative < 0 || leftRelative === -0) {
          leftRelative = 0
        } else if ( leftRelative > 1) {
          leftRelative = 1
        }

        let leftPercents = leftRelative * 100
        this.thumb.style.left = `${leftPercents}%`
        this.progress.style.width = `${leftPercents}%`

        this.numberSpan = this.resultNumberSpan()
        
        if (this.numberSpan < 0 || this.numberSpan === -0) {
          this.numberSpan = 0
        } else if (this.numberSpan > (this.steps - 1)) {
          this.numberSpan = this.steps - 1
        }

        this.sliderValue()
        this.activeValue(this.numberSpan)
      }

      document.addEventListener('pointermove', onMove)

      document.addEventListener('pointerup', () => {
        document.removeEventListener('pointermove', onMove)
        this.eventOnClickSlider()

        if (this.slider.classList.contains('slider_dragging')) {
          this.slider.classList.remove('slider_dragging')
        }
        
        this.generateCustomEvent(this.numberSpan)
      }, { once: true })
    })
  }



  createHTMLSlider() {
    return `
      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb" style="left: 0%;">
        <span class="slider__value">0</span>
      </div>

      <!--Заполненная часть слайдера-->
      <div class="slider__progress" style="width: 0%;"></div>

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
      this.left =  e.clientX - this.slider.getBoundingClientRect().left
      this.numberSpan = this.resultNumberSpan()
      this.eventOnClickSlider()    
      
      this.generateCustomEvent(this.numberSpan)
    }
  }

  resultNumberSpan() {
    return Math.round( this.left / ( this.slider.offsetWidth / ( this.steps - 1 ) ))
  }

  eventOnClickSlider() {
    this.addElementsSlider()
    this.sliderChange()
    this.sliderValue()
    this.activeValue(this.numberSpan)
  }

  addElementsSlider() {
    this.thumb = this.slider.querySelector('.slider__thumb')
    this.progress = this.slider.querySelector('.slider__progress')
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
    if (id < 0 || id === -0) {
      id = 0
    } else if (id > (this.steps - 1)) {
      id = this.steps - 1
    }
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
