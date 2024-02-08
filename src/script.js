const sliderList = document.querySelector('.slider-list')
const btnBack = document.querySelector('.btn-back')
const btnNext = document.querySelector('.btn-next')

const mockList = [{}, {}, {}, {}, {}, {}, {}, {}]
const sliderStep = 212

let stepIndex = 0

mockList.forEach(() => {
  const listItem = document.createElement('li')
  listItem.classList.add('list-item')
  listItem.innerText = 'loading...'
  sliderList.appendChild(listItem)
})

btnBack.addEventListener('click', () => {
  if (stepIndex > 0) {
    stepIndex--
    sliderList.style.transform = `translateX(${sliderStep * stepIndex * -1}px)`
  }
})

btnNext.addEventListener('click', () => {
  const elAmount = document.querySelectorAll('.list-item').length

  if (stepIndex < elAmount - 4) {
    stepIndex++
    sliderList.style.transform = `translateX(${sliderStep * stepIndex * -1}px)`
  }
})
