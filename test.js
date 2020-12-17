import './styles.scss';
import { bds } from './src/data';
// import image from './static/images/*.*';
// import $ from 'jquery';
// import 'bootstrap';
// $('body').append('jquery + bootstrap works!');
const app = document.getElementById('app');
app.innerHTML += '<section class="flex"></section>';
const section = document.querySelector('section');

for (let i = 0; i < bds.length; i++) {
  section.innerHTML += `
  <div class="carte_bd" id="div${i}">
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
      RESUME : ${bds[i].resume.substring(0, 35)} ...<br> 
      <button>lire la suite...</button>
      <br>
  </div>`;
}

const buttons = document.querySelectorAll('button');
for (let j = 0; j < buttons.length; j++) {
  buttons[j].addEventListener('click', () => {
    const nomDiv = `div${j}`;
    const maDivARemplacer = document.getElementById(nomDiv);
    console.log(nomDiv);
    console.log(maDivARemplacer);
    maDivARemplacer.innerHTML = `
    <div id="div${j}">
      <img src="images/${bds[j].image}"><br>
      ID : ${bds[j].id}<br>
      TITRE : ${bds[j].titre}<br>
      EDITEUR : ${bds[j].editeur}<br>
      COLLECTION : ${bds[j].collection}<br>
      SERIE : ${bds[j].serie}<br>
      TYPE : ${bds[j].type}<br>
      ETAT : ${bds[j].etat}<br>
      ISBN : ${bds[j].isbn}<br>
      ANNEE DE PARUTION : ${bds[j].annee_de_parution}<br>
      N° tome : ${bds[j].no_tome}<br>
      PRIX : ${bds[j].prix}<br>
      THEMES : ${bds[j].themes}<br>
      AUTEURS : ${bds[j].auteurs}<br>
      RESUME : ${bds[j].resume}<br> 
      <button>Réduir</button>
      <br>
  </div>`;
  });
}
