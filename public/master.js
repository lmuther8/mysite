// JS file for my personal website
// Luke Muther, Dec 2021


const header = document.getElementById('header')
window.addEventListener('scroll', function(event) {
  var top  = window.pageYOffset || document.documentElement.scrollTop;
  if (top>=20) {
    header.classList.add('header-scrolled')
  }
  else {
    header.classList.remove('header-scrolled')
  }
})
