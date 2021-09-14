const slider = document.querySelector('.slider')
const buttons = document.querySelectorAll('.btn')
const options = document.querySelectorAll('.option')
const sliders = document.querySelectorAll('.img')
const backgrounds = document.querySelectorAll('.bg')

let index = 1
let op_index = 0
let size = sliders[index].clientWidth

const update = () => {
  slider.style.transform = `translateX(${-size * index}px)`

  backgrounds.forEach(bg => bg.classList.remove('show'))
  backgrounds[op_index].classList.add('show')

  options.forEach(op => op.classList.remove('colored'))
  options[op_index].classList.add('colored')
}

const sliderFun = () => {
  slider.style.transition = "transform .5s ease-in-out"
  update()
}

const btnCheck = (e) => {
  console.log(e.target.id)
  if(e.target.id === 'prev') {
    index--

    if(op_index === 0) {
      op_index = 4
    }else {
      op_index--
    }
  }else if(e.target.id === 'next') {
    index++

    if(op_index === 4) {
      op_index = 0
    }else {
      op_index++
    }
  }

  sliderFun()
}

update()

slider.addEventListener('transitionend', () => {
  if(sliders[index].id === 'last') {
    slider.style.transition = 'none'
    index = sliders.length - 2
    slider.style.transform = `translateX(${-size * index}px)`
  }else if(sliders[index].id === 'first') {
    slider.style.transition = 'none'
    index = 1
    slider.style.transform = `translateX(${-size * index}px)`
  }
})

const optionFun = (e) => {
  const i = Number(e.target.getAttribute('option-index'))
  console.log(i)
  op_index = i
  index = i + 1
  sliderFun()
}

buttons.forEach(btn => btn.addEventListener('click', btnCheck))
options.forEach(option => option.addEventListener('click', optionFun))