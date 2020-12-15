import './styles.scss';
import { bds } from './src/data';
// import image from './static/images/*.*';
// import $ from 'jquery';
// import 'bootstrap';
// $('body').append('jquery + bootstrap works!');
const app = document.getElementById('app');
// [{},{},{},{}]
console.log(bds);
console.log(app);

app.innerHTML += '<section class="flex"></section>';
const section = document.querySelector('section');

// console.log(finResumer);

for (let i = 0; i < bds.length; i++) {
  section.innerHTML += `
  <div id="div${i}">
      <img src="images/${bds[i].image}"><br>
      ID : ${bds[i].id}<br>
      TITRE : ${bds[i].titre}<br>
      EDITEUR : ${bds[i].editeur}<br>
      COLLECTION : ${bds[i].collection}<br>
      SERIE : ${bds[i].serie}<br>
      TYPE : ${bds[i].type}<br>
      ETAT : ${bds[i].etat}<br>
      ISBN : ${bds[i].isbn}<br>
      ANNEE DE PARUTION : ${bds[i].annee_de_parution}<br>
      N° tome : ${bds[i].no_tome}<br>
      PRIX : ${bds[i].prix}<br>
      THEMES : ${bds[i].themes}<br>
      AUTEURS : ${bds[i].auteurs}<br>
      RESUME : ${bds[i].resume}<br>
      <button>lire la suite...</button>
      <br>
  </div>`;
  const buttons = document.querySelectorAll('button');
  for (let j = 0; j < buttons.length; j++) {
    buttons[j].addEventListener('click', () => {
      section.innerHTML += bds[j].resume.slice(35);
    });
  }
}

// BELEN
const buttons = document.querySelectorAll('button');
for (let j = 0; j < buttons.length; j++) {
  buttons[j].addEventListener('click', () => {
    const nomDiv = `div${j}`;
    console.log(nomDiv);
    nomDiv.innerHTML += bds[j].resume.slice(35);
    // il faudra que tu cache le button je suppose
    // dans ton css button {visibility: visible}
    // ici -> je ne suis pas sur mais peut etre
    // buttons.style.visibility = hidden;
  });
}
