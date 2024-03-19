/**
 * Librairie swiper
 */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1
});

var swiper2 = new Swiper(".mySwiper", {
    slidesPerView: 1
});





/**
 * Ajoute du blur quand on affiche la Connexion ou l'Inscription
 */
/*document.querySelector(".btn-connect").addEventListener("click", addBlurBackground);
document.querySelector(".btn-sign-in").addEventListener("click", addBlurBackground);
function addBlurBackground () {
    document.querySelector(":root").style.filter = 'blur(2px)';
}
function removeBlurBackground () {
    document.querySelector(":root").style.filter = 'blur(0px)';
}*/

/**
 * Slider 'Qui sommes nous ?'
 * Cache toutes les sections sauf le paragraphe de la première et l'idSlideVisible
 *//*
const aboutUsArticles = document.querySelectorAll("#about-us article");
aboutUsArticles[0].querySelector("p").setAttribute("style", "display: none");

//Slide visible par défaut
let idSlideVisible = 1;
changeSlide(idSlideVisible);

function changeSlide(nbr) {
  for (let i = 1; i < 5; i++) {
    aboutUsArticles[i].setAttribute("style", "display: none");
  }
  aboutUsArticles[nbr].setAttribute("style", "display: block");
}
buttonSlideGauche = document.querySelector("#slideGauche");
buttonSlideGauche.addEventListener("click", () => {
  decreaseActiveSlide();
  changeSlide(idSlideVisible);
});
function decreaseActiveSlide() {
  if (idSlideVisible > 1) {
    idSlideVisible--;
    changeSlide(idSlideVisible);
  } else {
    throw new Error("Bouton suivant cliqué lorsque slide la plus à droite");
  }
}

buttonSlideDroite = document.querySelector("#slideDroite");
buttonSlideDroite.addEventListener("click", () => {
  increaseActiveSlide();
  changeSlide(idSlideVisible);
});
function increaseActiveSlide() {
  if (idSlideVisible < 4) {
    idSlideVisible++;
    changeSlide(idSlideVisible);
  } else {
    throw new Error("Bouton précédent cliqué lorsque slide la plus à gauche");
  }
}*/

/**
 * Affiche/Cache les parties Connexion/Inscription
 */
hideConnexionInscription();
authentification = document.getElementById("authentification");

element = document.querySelectorAll(".btn-connect");
for (e of element) {
  e.addEventListener("click", showConnexion);
  function showConnexion() {
    //console.log("sC");
    connexion = document.getElementById("connexion");
    connexion.style.display = "block";
    authentification.style.display = "block";
    inscription = document.getElementById("inscription");
    inscription.style.display = "none";
  }
}

element = document.querySelectorAll(".btn-sign-in");
for (e of element) {
  e.addEventListener("click", showInscription);
  function showInscription() {
    //console.log("sI");
    inscription = document.getElementById("inscription");
    inscription.style.display = "block";
    authentification.style.display = "block";
    connexion = document.getElementById("connexion");
    connexion.style.display = "none";
  }
}

function hideConnexionInscription() {
  //console.log("hCI");
  connexion = document.getElementById("connexion");
  inscription = document.getElementById("inscription");
  authentification.style.display = "none";
  connexion.style.display = "none";
  inscription.style.display = "none";
}











