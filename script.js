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
      <img src="images/${bds[i].image}"><br />
      ID : ${bds[i].id}<br />
      TITRE : <i id="${i}">${bds[i].titre}</i><br />
      EDITEUR : ${bds[i].editeur}<br />
      COLLECTION : ${bds[i].collection}<br />
      SERIE : ${bds[i].serie}<br />
      TYPE : ${bds[i].type}<br />
      ETAT : ${bds[i].etat}<br />
      ISBN : ${bds[i].isbn}<br />
      ANNEE DE PARUTION : ${bds[i].annee_de_parution}<br />
      N° tome : ${bds[i].no_tome}<br />
      PRIX : ${bds[i].prix}<br />
      THEMES : ${bds[i].themes}<br />
      AUTEURS : ${bds[i].auteurs}<br />
      RESUME : <i id="${i}" class="visible"> ${bds[i].resume.substring(0, 35)} </i>...<br /> 
      <i id="${i}" class="cache"> ${bds[i].resume} </i>
      <button class="btn">lire la suite...</button> 
      <i class="fas fa-shopping-basket"></i>
      <br />
      </div>`;
}

// const finResumer = bds[i].resume.substring(35);
// document.body.addEventListener('click', (e) => {
//   if (e.target.matches('.btn')) {
//     const visibleToCacher = document.querySelectorAll('.visible');
//     for (const el of visibleToCacher) {
//       el.style.display = 'none';
//     }
//     const cacherToVisible = document.querySelectorAll('.cache');
//     for (const el of cacherToVisible) {
//       el.style.display = 'block';
//     }
//     bds[btnbd.id].innerHTML += finResumer;
//   }
// });
// const boutons = document.querySelectorAll('.btn');
// for (const bouton of boutons) {
//   bouton.addEventListener('click', (e) => {
//     const visibleToCacher = document.querySelectorAll('.visible');
//     for (const el of visibleToCacher) {
//       e.target.parentNode.el.style.display = 'none';
//     }
//     const cacherToVisible = document.querySelectorAll('.cache');
//     for (const el of cacherToVisible) {
//       e.target.parentNode.el.style.display = 'block';
//     }
//   });
// }

// const resumer = document.querySelectorAll('.visible');
// console.log(resumer);
// const btn = document.querySelectorAll('.btn');

// document.body.addEventListener('click', (e) => {
//   for (let i = 0; i < btn.length; i++) {
//     const resumeC = `${bds[i].resume}`;
//     if (e.target.matches(".btn")) {
//     e.target.parentNode.innerText =
//   }
//   }
// });
app.innerHTML += '<div class="panier"></div>';
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.btn')) {
    const id = e.target.parentNode.id.replace('div', '');
    const text = bds[id].resume;
    e.target.parentNode.querySelector('.visible').innerText = text;
  }
  if (e.target.matches('.fa-shopping-basket')) {
    const id = e.target.parentNode.id.replace('div', '');
    const { titre } = bds[id];
    console.log(titre);
    const panier = document.querySelector('.panier');
    panier.innerHTML += `${titre} <br />`;
  }
});
