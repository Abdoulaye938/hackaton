const btnEnvoyer = document.getElementById('btnEnvoyer');
const mesClasses = document.querySelectorAll('.form-control');
btnEnvoyer.addEventListener('click', () => {
  window.local = 'index.html';
  console.log('marche');
});
