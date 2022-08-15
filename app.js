const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});
function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const password2Value = password2.value;
  if (usernameValue === '') {
    setErrorFor(username, 'username cannot be blank');
  } else {
    setsuccessFor(username);
  }
  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setsuccessFor(email);
  }
  if (passwordValue === '') {
    setErrorFor(password, 'password cannot be blank');
  } else {
    setsuccessFor(password);
  }
  if (password2Value === '') {
    setErrorFor(password2, 'password two cannot be blank');
  } else if (password2Value !== passwordValue) {
    setErrorFor(password2, 'password does not match');
  } else {
    setsuccessFor(password2);
  }
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control error';
}
function setsuccessFor(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control success';
  small.innerText = '';
}

function isEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}
