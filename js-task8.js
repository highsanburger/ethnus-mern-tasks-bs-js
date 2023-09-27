
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const mail = document.getElementById('mail')
const pass = document.getElementById('pass')
const repass = document.getElementById('repass')
const age = document.getElementById('age')
const pno = document.getElementById('pno')
const addr = document.getElementById('addr')
const state = document.getElementById('state')

const form = document.getElementById('form')

const errFname = document.getElementById('errorFname')
const errLname = document.getElementById('errorLname')
const errMail = document.getElementById('errorMail')
const errPass = document.getElementById('errorPass')
const errRepass = document.getElementById('errorRepass')
const errAge = document.getElementById('errorAge')
const errPno = document.getElementById('errorPno')
const errAddr = document.getElementById('errorAddr')
const errState = document.getElementById('errorState')

form.addEventListener('submit', (e) => {
  if (fname.value === '' || fname.value == null) {
    e.preventDefault()
    errFname.innerText = 'POOR'
  }
  if (lname.value === '' || lname.value == null) {
    e.preventDefault()
    errLname.innerText = 'POOR'
  }
  if (pass.value === '' || pass.value == null) {
    e.preventDefault()
    errPass.innerText = 'POOR'
  }
  if (repass.value === '' || repass.value == null) {
    e.preventDefault()
    errRepass.innerText = 'POOR OR MISMATCH'
  }
  if (pass.value !== repass.value) {
    e.preventDefault()
    errRepass.innerText = 'POOR OR MISMATCH'
  }
  if (mail.value === '' || mail.value == null) {
    e.preventDefault()
    errMail.innerText = 'POOR'
  }
  if (age.value === '' || age.value == null) {
    e.preventDefault()
    errAge.innerText = 'POOR'
  }
  if (pno.value === '' || pno.value == null) {
    e.preventDefault()
    errPno.innerText = 'POOR'
  }
  if (addr.value === '' || addr.value == null) {
    e.preventDefault()
    errAddr.innerText = 'POOR'
  }
  if (state.value === '' || state.value == null) {
    e.preventDefault()
    errState.innerText = 'POOR'
  }
})
