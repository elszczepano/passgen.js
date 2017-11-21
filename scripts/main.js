let password = '';
const receivedPassword = document.querySelector('#passwordReceiveBox');
const alertBox = document.querySelector('#currentAlert');
const lowercaseLetters = document.querySelector('#lowercaseLetters');
const uppercaseLetters = document.querySelector('#uppercaseLetters');
const numbers = document.querySelector('#numbers');
const specialCharacters = document.querySelector('#specialCharacters');
const generateButton = document.querySelector('#generatePassword');
function generatePassword() {
  if(!(lowercaseLetters.checked) && !(uppercaseLetters.checked)&& !(numbers.checked)&&!(specialCharacters.checked)) {
    alertBox.classList.remove('text-success');
    alertBox.classList.add('text-danger');
    alertBox.innerHTML = "Please check at least one checkbox!";
    return;
  }
  password = '';
  let passwordLength = document.querySelector('#passwordLength').value;
  if(isNaN(passwordLength)) {
    alertBox.classList.remove('text-success');
    alertBox.classList.add('text-danger');
    alertBox.innerHTML = "Enter the password length!";
    return;
  }
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
        if(!(lowercaseLetters.checked)&&(character > 96 && character < 123)) {
          passwordLength++;
          continue;
        }
        if(!(uppercaseLetters.checked)&&(character > 64 && character < 91)) {
          passwordLength++;
          continue;
        }
        if(!(numbers.checked)&&(character > 47 && character < 58)) {
          passwordLength++;
          continue;
        }
        if(!(specialCharacters.checked)&&((character>32&&character<48)||(character>57&&character<65)||(character>90&&character<97)||(character>122&&character<127))) {
          passwordLength++;
          continue;
        }
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
generateButton.addEventListener('click',generatePassword);
receivedPassword.addEventListener('click',copyToClipboard);
