/* eslint linebreak-style: ["error", "windows"] */

const getNavLinks = document.querySelector('.nav-links');
const getBars = document.querySelector('.fa-bars');
const getnav = document.querySelector('nav');
getnav.style.display = 'none';

getBars.addEventListener('click', () => {
  getnav.style.display = 'block';
  getBars.style.display = 'none';
});