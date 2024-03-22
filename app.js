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

// this variable tell which page is active
// can take values default, scrollMenu, connexion, inscription
let activeTab = "default"; //non utilisé pour le moment

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
    //cas particulier où l'utlisateur serait <980, ouvrirait le menu (avec l'oiseau), puis passerait >980 ce qui chanve le menu en haut mais il faut enlever l'oiseau manuellement
    imgOiseauMenu.style.display = "none";
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
function openScrollingMenu() {
  navPrimary.style.display = "flex";
  // Afficher l'image d'oiseau dans le menu Authentification
  imgOiseauMenu.style.display = "flex";
  activeTab = "scrollMenu";
}
// Fonction pour fermer le menu
function closeScrollingMenu() {
  navPrimary.style.display = "none";
  // Supprimer l'image d'oiseau dans le menu Authentification
  imgOiseauMenu.style.display = "none";
  activeTab = "default";
}
// Fonction de basculement du menu
function toggleScrollingMenu() {
  if (
    navPrimary.style.display === "flex" ||
    popUpAuth.style.display === "flex" ||
    inscription.style.display === "flex"
  ) {
    closeMenu();
  } else {
    openScrollingMenu();
  }
}

/** POP-UP AUTHENTIFICATION */
//Ouvre le menu Authentification
function openMenuAuthentification() {
  closeScrollingMenu();
  desactiveScroll();
  openAuthentification();
  openConnexion();
  closeInscription();
  adjustNavDisplay();
}
//Ouvre le menu Inscription
function openMenuInscription() {
  closeScrollingMenu();
  desactiveScroll();
  openAuthentification();
  closeConnexion();
  openInscription();
  activeTab = "inscription";
  adjustNavDisplay();
}
//Ferme le menu
function closeMenu() {
  closeScrollingMenu();
  activeScroll();
  closeAuthentification();
  closeConnexion();
  closeInscription();
  //navPrimary.style.display = "flex"; //normalement inutile
  adjustNavDisplay();
}
// Affiche la partie Authentification du menu
function openAuthentification() {
  popUpAuth.style.display = "flex";
}
// Ferme la partie Authentification du menu
function closeAuthentification() {
  popUpAuth.style.display = "none";
}
// ré-Active le scroll sur toute la page
function activeScroll() {
  scroller.style.overflowY = "scroll";
}
// Désactive le scroll sur toute la page
function desactiveScroll() {
  scroller.style.overflowY = "hidden";
}
// CONNEXION
// Affiche la partie Connexion du menu
function openConnexion() {
  connexion.style.display = "flex";
  typeConnexion.innerHTML = "Connexion";
  activeTab = "connexion";
}
// Ferme la partie Connexion du menu
function closeConnexion() {
  connexion.style.display = "none";
}
// Affiche la partie Inscription du menu
function openInscription() {
  inscription.style.display = "flex";
  typeConnexion.innerHTML = "Inscription";
}
// Ferme la partie Inscription du menu
function closeInscription() {
  inscription.style.display = "none";
}

// Ajout de l'écouteur d'événements pour le menu hamburger
hamburgerMenuIcon.addEventListener("click", toggleScrollingMenu);

// Fermer le menu lorsqu'on clique dans un lien de la nav ()
for (let link of navLinks) {
  link.addEventListener("click", closeScrollingMenu);
  for (b of btnConnect) {
    b.addEventListener("click", closeScrollingMenu);
  }
}

// Ouvre la partie Inscription du menu
for (b of btnSignIn) {
  b.addEventListener("click", openMenuInscription);
}

// Ouvre la partie Authentification du menu
for (b of btnConnect) {
  b.addEventListener("click", openMenuAuthentification);
}

// Ferme le menu
for (c of closePopUp) {
  c.addEventListener("click", closeMenu);
}

// A classer
