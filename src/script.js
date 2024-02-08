const sliderList = document.querySelector('.slider-list')
const mockList = [{}, {}, {}, {}, {}, {}, {}, {}]

mockList.forEach((_el, i) => {
  const listItem = document.createElement('li')
  listItem.classList.add('list-item')
  listItem.innerText = 'loading...'
  sliderList.appendChild(listItem)
})
