// JS file for my personal website
// Luke Muther, Dec 2021

//scroll navbar
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

//email form
const emailForm = document.getElementById('contact-form')
emailForm.addEventListener('submit', (e) => {
  e.preventDefault()

  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var subj = document.getElementById('subject').value.trim();
  var message = document.getElementById('message').value.trim();

  var data = {
    name,
    email,
    subj,
    message
  };
  fetch('/mail', {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  }).then(res => {
    console.log("Request complete! response:", res);
  });
});
