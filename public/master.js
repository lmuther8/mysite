// JS file for my personal website
// Luke Muther, Dec 2021


const header = document.getElementById('header')
const backtotop = document.getElementById('backtotop')
window.addEventListener('scroll', function(event) {
  var top  = window.pageYOffset || document.documentElement.scrollTop;
  if (top>=20) {
    header.classList.add('header-scrolled')
    backtotop.classList.add('active')
  }
  else {
    header.classList.remove('header-scrolled')
    backtotop.classList.remove('active')
  }
})
