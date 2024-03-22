//Essayer d'avoir un truc un peu plus safe

/**
 * VARIABLES D'ENVIRONNEMENT
 *  */
const scroller = document.querySelector(".scroller");
const navPrimary = document.querySelector(".nav-primary");
const popUpAuth = document.querySelector(".pop-up-auth");
const closePopUp = document.querySelectorAll(".close-pop-up");
const authentification = document.querySelector(".authentification");
const typeConnexion = document.querySelector(".type-connexion");
const connexion = document.querySelector(".form-connexion");
const inscription = document.querySelector(".form-inscription");
const hamburgerMenuIcon = document.querySelector(".ico-menu-hamburger");
const mainNav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".ul-nav-header li");
const btnConnect = document.querySelectorAll(".btn-connect");
const btnSignIn = document.querySelectorAll(".btn-sign-in");
const imgOiseauMenu = document.querySelector(".img-nav-header");

/**
 *  RESPONSIVITÉ
 * 
 *  1.Fonction pour ajuster l'affichage de la Navbar en fonction de la largeur de l'écran
 * 
 * 
  */  
  function adjustNavDisplay() {
    // Si la largeur est supérieur à 980px
    if (window.innerWidth > 980) {
      hamburgerMenuIcon.style.display = "none";
      navPrimary.style.display = "flex";
      mainNav.classList.remove("nav-primary");
      mainNav.classList.add("nav-secondary");
    } else {
      // Si la largeur est inférieur à 980px
      hamburgerMenuIcon.style.display = "flex";
      navPrimary.style.display = "none";
      mainNav.classList.add("nav-primary");
      mainNav.classList.remove("nav-secondary");
    }
    // Écouter les changements de taille de la fenêtre
    window.addEventListener("resize", adjustNavDisplay);
    
  }
  // Appel initial pour configurer l'affichage basé sur la largeur actuelle
  adjustNavDisplay();


 /**
 * MENU DÉROULANT
 * Fonction de basculement du menu déroulant
 * 
  */ 
// Fonction pour ouvrir le menu
function openNavPrimary() {
  navPrimary.style.display = "flex";
  // Afficher l'image d'oiseau dans le menu Authentification
  imgOiseauMenu.style.display = "flex";
}
// Fonction pour fermer le menu
function closeNavPrimary() {
  navPrimary.style.display = "none";
  // Supprimer l'image d'oiseau dans le menu Authentification
  imgOiseauMenu.style.display = "none";
}
// Fonction de basculement du menu
function toggleScrollingMenu() {
  if (navPrimary.style.display === "flex") {
    closeNavPrimary();
  } else {
    openNavPrimary();
  }
}













/** POP-UP AUTHENTIFICATION */
//Ouvre le menu Authentification
function openMenuAuthentification () {
  closeNavPrimary();
  desactiveScroll();
  openAuthentification();
  openConnexion();
  closeInscription();
}
//Ouvre le menu Inscription
function openMenuInscription () {
  closeNavPrimary();
  desactiveScroll();
  openAuthentification();
  closeConnexion();
  openInscription();
}
//Ferme le menu
function closeMenu () {
  closeNavPrimary();
  activeScroll();
  closeAuthentification();
  closeConnexion();
  closeInscription();
  //navPrimary.style.display = "flex"; //normalement inutile
  adjustNavDisplay();
}
// Affiche la partie Authentification du menu
function openAuthentification () {
  popUpAuth.style.display = "flex";
}
// Ferme la partie Authentification du menu
function closeAuthentification () {
  popUpAuth.style.display = "none";
}
// ré-Active le scroll sur toute la page
function activeScroll () {
  scroller.style.overflowY = "scroll";
}
// Désactive le scroll sur toute la page
function desactiveScroll () {
  scroller.style.overflowY = "hidden";
}
// Affiche la partie Connexion du menu
function openConnexion () {
  connexion.style.display = "flex";
  typeConnexion.innerHTML = "Connexion";
}
// Ferme la partie Connexion du menu
function closeConnexion () {
  connexion.style.display = "none";
}
// Affiche la partie Inscription du menu
function openInscription () {
  inscription.style.display = "flex";
  typeConnexion.innerHTML = "Inscription";
}
// Ferme la partie Inscription du menu
function closeInscription () {
  inscription.style.display = "none";
}











// Ajout de l'écouteur d'événements pour le menu hamburger
hamburgerMenuIcon.addEventListener("click", toggleScrollingMenu);
 
// Fermer le menu lorsqu'on clique dans un lien de la nav ()
for (let link of navLinks) {
  link.addEventListener("click", closeNavPrimary);
  for (b of btnConnect){
    b.addEventListener("click", closeNavPrimary);
  }
}

// Ouvre la partie Inscription du menu
for (b of btnSignIn){
  b.addEventListener("click",openMenuInscription);
}

// Ouvre la partie Authentification du menu
for (b of btnConnect){
  b.addEventListener("click",openMenuAuthentification);
}

// Ferme le menu
for (c of closePopUp) {
  c.addEventListener("click", closeMenu);
}



// A classer
