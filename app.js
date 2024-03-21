/**
 * VARIABLES D'ENVIRONNEMENT
 *  */
const navPrimary = document.querySelector(".nav-primary");
const popUpAuth = document.querySelector("#pop-up-auth");
const closePopUpAuth = document.querySelector(".close-pop-up-auth");
const hamburgerMenuIcon = document.querySelector(".ico-menu-hamburger");
const mainNav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".ul-nav-header li");
const btnConnect = document.querySelector(".btn-connect");

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
 * 
  */ 
// Fonction pour ouvrir le menu
function openScrollingMenu() {
  navPrimary.style.display = "flex";
  closePopUpAuth.style.display = "flex";
}

// Fonction pour fermer le menu
function closeScrollingMenu() {
  navPrimary.style.display = "none";
  popUpAuth.style.display = "none";
}

// Fonction de basculement du menu
function toggleScrollingMenu() {
  if (navPrimary.style.display === "flex") {
    closeScrollingMenu();
  } else {
    openScrollingMenu();
  }
};
// Ajout de l'écouteur d'événements pour le menu hamburger
hamburgerMenuIcon.addEventListener("click", toggleScrollingMenu);
 
// Fermer le menu lorsqu'on clique dans un lien de la nav ()
for (let link of navLinks) {
  link.addEventListener("click", closeScrollingMenu);
  btnConnect.addEventListener("click", closeScrollingMenu);
}


