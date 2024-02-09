const sliderList = document.querySelector('.slider-list')
const popup = document.querySelector('.popup')
const btnBack = document.querySelector('.btn-back')
const btnNext = document.querySelector('.btn-next')
const btnClose = document.querySelector('.btn-close')

const tokenKay = 'd2377b8aff3d70561aa2fb1e289397ce'
const videoIds = [
  '402032394',
  '403530213',
  '224199451',
  '404407889',
  '908308173',
  '404648675',
  '405247867',
  '399656053',
]
const sliderStep = 228

let stepIndex = 0

btnClose.addEventListener('click', () => popup.close())

videoIds.forEach((id) => {
  fetch(`https://api.vimeo.com/videos/${id}`, {
    headers: {
      Authorization: `Bearer ${tokenKay}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request is failed with status ${response.status}`)
      }
      return response.json()
    })
    .then((data) => {
      if (data.pictures && data.pictures.sizes[3]) {
        const listItem = document.createElement('li')
        listItem.addEventListener('click', (e) => {
          popup.show()
        })
        listItem.classList.add('list-item')
        sliderList.appendChild(listItem)

        const preview = document.createElement('img')
        preview.src = data.pictures.sizes[3].link
        listItem.appendChild(preview)
      }
    })
    .catch((err) => console.error(err.message))
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
