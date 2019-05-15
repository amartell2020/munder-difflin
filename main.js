window.addEventListener('scroll', function() {
  let pics = document.getElementsByClassName('small')
  if(window.scrollY >= 1) {
    pics[0].classList.remove('hidden')
    pics[0].classList.add('show')
  }
  if(window.scrollY >= 1) {
    pics[1].classList.remove('hidden')
    pics[1].classList.add('show')
  }
  if(window.scrollY >= 1) {
    pics[2].classList.remove('hidden')
    pics[2].classList.add('show')
  }
})
