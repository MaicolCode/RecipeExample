const $ = el => document.querySelector(el)
const $$ = el => document.querySelectorAll(el)

$$('.star-container').forEach(el => {
  el.addEventListener('click', e => {
    let activeStar = e.target
    console.log(activeStar.classList.contains('active-star'))

    if (activeStar.classList.contains('active-star') === false) {
      Array.from($('.star-container').children).map(el =>
        el.classList.remove('active-star')
      )
      Array.from($('.star-container').children)
        .slice(0, e.target.id)
        .map(el => el.classList.add('active-star'))
    } else {
      Array.from($('.star-container').children).map(el =>
        el.classList.remove('active-star')
      )
    }
  })
})
