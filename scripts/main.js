let password = '';
let receivedPassword = document.querySelector('#passwordReceiveBox');
let alertBox = document.querySelector('#currentAlert');
function generatePassword() {
  password = '';
  let passwordLength = document.querySelector('#passwordLength').value;
  if(passwordLength < 8) {
    alertBox.classList.remove('text-success');
    alertBox.classList.add('text-danger');
    alertBox.innerHTML = "Strong password requires at least 8 characters!";
  }
  else if (passwordLength > 50) {
    alertBox.classList.remove('text-success');
    alertBox.classList.add('text-danger');
    alertBox.innerHTML = "This password is too long!";
  }
  else {
    alertBox.classList.remove('text-danger');
    alertBox.classList.add('text-success');
    alertBox.innerHTML = "Here's your password! Click on the input to copy your password to your clipboard";
    for(let i=0; i<passwordLength; i++) {
        let character = 33 + Math.floor(Math.random()*92);
        password += String.fromCharCode(character);
    }
    receivedPassword.value = password;
  }
}
function copyToClipboard() {
  if( password != '')
  {
    receivedPassword.select();
    document.execCommand('copy');
    alertBox.classList.remove('text-danger');
    alertBox.classList.add('text-success');
    alertBox.innerHTML = "Copied!";
  }
}
const generateButton = document.querySelector('#generatePassword');
generateButton.addEventListener('click',generatePassword);
receivedPassword.addEventListener('click',copyToClipboard);
