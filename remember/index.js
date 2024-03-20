/**
 * Montrer la nav quand la souris est dans celle-ci
 */
document
  .querySelector(".ico-menu-hamburger")
  .addEventListener("click", switchScrollingMenu);
function switchScrollingMenu() {
  if (document.querySelector(".nav-primary").style.display == "flex") {
    document.querySelector(".nav-primary").style.display = "none";
  } else {
    document.querySelector(".nav-primary").style.display = "flex";
  }
}
/**
 * Fermer le menu lorsqu'on clique dans un lien de la nav
 */
let navA = document.querySelectorAll("body>header nav a");
for (a of navA) {
  a.addEventListener("click", closeScrollingMenu);
}
function closeScrollingMenu() {
  document.querySelector(".nav-primary").style.display = "none";
}

/**
 * Fermer le menu quand on clique sur le bouton correspondant
 */
document.querySelector(".close-pop-up-auth").addEventListener("click", () => 
{
  document.querySelector("#pop-up-auth").style.display = "none";
}
);





/**
 * Slider 'Qui sommes nous ?'
 * Cache toutes les sections sauf le paragraphe de la première et l'idSlideVisible
 */

const aboutUsArticles = document.querySelectorAll("#about-us article");
aboutUsArticles[0].querySelector("p").setAttribute("style", "display: none");

//Slide visible par défaut
let idSlideVisible = 1;
changeSlide(idSlideVisible);

function changeSlide(nbr) {
  for (let i = 1; i < 5; i++) {
    aboutUsArticles[i].setAttribute("style", "display: none");
  }
  aboutUsArticles[nbr].setAttribute("style", "display: flex");
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
}

/**
 * Slider 'Tarifs'
 */

const aboutUsArticlesTarifs = document.querySelectorAll(".article-price");
aboutUsArticlesTarifs[0].setAttribute("style", "display:flex");
aboutUsArticlesTarifs[1].setAttribute("style", "display:none");
aboutUsArticlesTarifs[2].setAttribute("style", "display:none");









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
    pop = document.getElementById("pop-up-auth");
    connexion = document.getElementById("connexion");
    inscription = document.getElementById("inscription");
    pop.style.display = "flex";
    connexion.style.display = "flex";
    authentification.style.display = "flex";

    inscription.style.display = "none";
  }
}

element = document.querySelectorAll(".btn-sign-in");
for (e of element) {
  e.addEventListener("click", showInscription);
  function showInscription() {
    //console.log("sI");
    inscription = document.getElementById("inscription");
    inscription.style.display = "flex";
    authentification.style.display = "flex";
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


























// Autres: poubelle

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










