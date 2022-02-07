/* eslint linebreak-style: ["error", "windows"] */
const getnav = document.querySelector('nav');
getnav.style.display = 'none';
const getFas = document.querySelector('.fas');

let toggleNav = false;

function openUp() {
  getnav.style.display = 'block';
  getFas.classList.replace('fa-bars', 'fa-times');
  toggleNav = true;
}

function closeUp() {
  getnav.style.display = 'none';
  getFas.classList.replace('fa-times', 'fa-bars');
  toggleNav = false;
}

getFas.addEventListener('click', () => {
  if (toggleNav === false) { openUp(); } else { closeUp(); }
});
