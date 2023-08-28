const container = document.getElementById('container');
const loginButton = document.getElementById('login');
const signUpButton = document.getElementById('signUp');

signUpButton.addEventListener('click', () => {
  container.classList.add('panel-active');
});

loginButton.addEventListener('click', () => {
  container.classList.remove('panel-active');
});

function auth() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  if (email == 'admin@gmail.com' && password == 'admin123') {
    alert('Login Successfully');
    window.location = 'accueil.html';
    // window.local = 'accueil.html';
    // window.location.assign('accueil.html');
    // window.location.replace('accueil.html');
    return false;
  } else {
    alert('Invalid Information');
  }
}

// function auth() {
//   var email = document.forms['myForm']['email'].value;
//   var password = document.forms['myForm']['password'].value;
//   if (email == 'admin@gmail.com' && password == 'admin123') {
//     window.location.assign('accueil.html');
//     alert('Login Successfully');
//   } else {
//     alert('Invalid Information');
//     return;
//   }
// }
