const usernameInput = document.querySelector('.enter[placeholder="Username"]');
const passwordInput = document.querySelector('.enter[placeholder="Password"]');
const loginButton = document.querySelector('.login');

function updateLoginButtonState() {
  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  const isFilled = usernameValue !== '' && passwordValue !== '' && passwordValue.length >= 6;

  loginButton.disabled = !isFilled;

  if (isFilled) {
    loginButton.classList.add('active');
  } else {
    loginButton.classList.remove('active');
  }
}

usernameInput.addEventListener('input', updateLoginButtonState);
passwordInput.addEventListener('input', updateLoginButtonState);

updateLoginButtonState();

