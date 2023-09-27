const name = document.getElementById('name')
const mail = document.getElementById('mail')
const site = document.getElementById('site')
const msg = document.getElementById('msg')
const form = document.getElementById('form')

const errName = document.getElementById('errorName')
const errMail = document.getElementById('errorMail')
const errSite = document.getElementById('errorSite')
const errMsg = document.getElementById('errorMsg')

form.addEventListener('submit', (e) => {
  if (name.value === '' || name.value == null) {
    e.preventDefault()
    errName.innerText = 'This field is required'
    name.style.borderColor = 'red';
  }
  if (mail.value === '' || mail.value == null) {
    e.preventDefault()
    errMail.innerText = 'A valid email address is required'
    mail.style.borderColor = 'red';
  }
  if (site.value === '' || site.value == null) {
    e.preventDefault()
    errSite.innerText = 'A valid url is required'
    site.style.borderColor = 'red';
  }
  if (msg.value === '' || msg.value == null) {
    e.preventDefault()
    errMsg.innerText = 'This field is required'
    msg.style.borderColor = 'red';
  }
})
