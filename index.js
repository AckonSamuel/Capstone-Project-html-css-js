/* eslint-disable linebreak-style */
const getnav = document.querySelector('.nav02');
const getFas = document.querySelector('.fas');
const x = window.matchMedia('(min-width: 768px)');

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

function mediaCheck() {
  if (x.matches) {
    getFas.classList.remove('fa-bars');
    getnav.style.display = 'flex';
  } else {
    getFas.classList.add('fa-bars');
    getnav.style.display = 'none';
  }
}

mediaCheck(x);
x.addEventListener('change', mediaCheck);

getFas.addEventListener('click', () => {
  if (toggleNav === false) { openUp(); } else { closeUp(); }
});

const trainers = [{
  img: './assets/images/Micheal.png',
  alt: 'Tutor: Michael Pearson',
  tutorName: 'Michael Pearson',
  skill: 'Front-End Accessibility Expert',
  description: `Has extensive experience with crafting font-end
    technologies that support accessibility 
    requirements and standards.`,
}, {
  img: './assets/images/Lindsey.png',
  alt: 'Tutor: Lindsey Holie',
  tutorName: 'Lindsey Holie',
  skill: 'Front-End Engineer',
  description: `Experience in computer science and using this skill in
    front-end development.`,
}, {
  img: './assets/images/Amanda.png',
  alt: 'Tutor: Amanda Simons',
  tutorName: 'Amanda Simons',
  skill: 'Front-End Dev Ops',
  description: `Extensive experience with software development pertaining
    to collaborations, integration, automation, and quality.`,
}, {
  img: './assets/images/Cody.png',
  alt: 'Tutor: Cody James',
  tutorName: 'Cody James',
  skill: 'U.I Developer',
  description: 'Highly skilled in interaction design skills.',
}, {
  img: './assets/images/John.png',
  alt: 'Tutor: John Mahn',
  tutorName: 'John Mahn',
  skill: 'Back-End Developer',
  description: `Experience in computer science and using this skill in
    front-end development.`,
}, {
  img: './assets/images/Hannah.png',
  alt: 'Tutor: Hannah Eugne',
  tutorName: 'Hanna Eugne',
  skill: 'Front-End Engineer',
  description: `Experience in computer science and using this skill in
    front-end development.`,
}];

function loadTutors() {
  const getTrainers = document.querySelector('.trainers');
  const getTitle = '<h3 class="tutors-title">Our Trainers</h3>';
  const getTrainer = document.createElement('div');
  getTrainer.classList.add('grid-trainers-mobile');
  const underline = '<hr>';
  getTrainers.innerHTML = getTitle;
  getTrainers.innerHTML += underline;
  getTrainers.appendChild(getTrainer);

  for (let i = 0; i < trainers.length; i += 1) {
    getTrainer.innerHTML += `
      <div class="trainer${i + 1} diva">
      <div class="chess"></div>
      <div class="trainer-info">
          <img src=${trainers[i].img} alt=${trainers[i].alt}>
          <p><strong>${trainers[i].skill}</strong>
        <br>  <br>  <br>
          ${trainers[i].description}</p>
  </div>
      `;
  }
  getTrainers.innerHTML += '<button type="button" class="more-tutors" onclick="ipUp();">More <i class="fas fa-angle-down"></button>';
}

const getTrainer3 = document.querySelector('.trainer3');
const getTrainer4 = document.querySelector('.trainer4');
const getTrainer5 = document.querySelector('.trainer5');
const getTrainer6 = document.querySelector('.trainer6');

function ipUp() {
  getTrainer3.style.display = 'block';
}

window.addEventListener('load', loadTutors);
