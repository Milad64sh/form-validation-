const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  const usernameValue = username.value;
  const passwordValue = password.value;
  const emailValue = email.value;
  const password2Value = password2.value;

  if (usernameValue === '') {
    setErrorFor(username, 'username cannot be blank');
  } else {
    setSuccessFor(username);
  }
  if (emailValue === '') {
    setErrorFor(email, 'email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === '') {
    setErrorFor(password, 'password cannot be blank');
  } else {
    setSuccessFor(password);
  }
  if (password2Value === '') {
    setErrorFor(password2, 'password two cannot be blank');
  } else if (password2Value !== passwordValue) {
    setErrorFor(password2, 'passwords does not match');
  } else {
    setSuccessFor(password2);
  }
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control error';
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
  const small = formControl.querySelector('small');
  small.innerText = '';
}
function isEmail(email) {
  return /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email);
}
