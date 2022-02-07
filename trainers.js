/* eslint linebreak-style: ["error", "windows"] */
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
  const section = document.querySelector('.trainers');
  const title = '<h3 class="tutors-title">Our Trainers</h3>';
  const container = document.createElement('div');
  container.classList.add('grid-trainers-mobile');
  const underline = '<hr>';
  section.innerHTML = title;
  section.innerHTML += underline;
  section.appendChild(container);

  for (let i = 0; i < trainers.length; i += 1) {
    container.innerHTML += `
      <div class="trainer${i + 1}">
      <div class="chess"></div>
      <div class="trainer-info">
          <img src=${trainers[i].img} alt=${trainers[i].alt}>
          <p><strong>${trainers[i].skill}</strong>
        <br>  <br>  <br>
          ${trainers[i].description}</p>
  </div>
      `;
  }
  section.innerHTML += '<button type="button">More </button>';
}

window.addEventListener('load', loadTutors);