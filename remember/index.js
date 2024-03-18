/**
 * Cache des sections au chargement de la page
 */
const aboutUsArticles = document.querySelectorAll("#about-us article");
aboutUsArticles[0].querySelector("p").setAttribute("style", "display: none");
aboutUsArticles[2].setAttribute("style", "display: none");
aboutUsArticles[3].setAttribute("style", "display: none");
aboutUsArticles[4].setAttribute("style", "display: none");


/**
 * Scrolle automatiquement vers la balise de la section ayant l'id correspondant
 * @param {href} event 
 */
const buttons = document.querySelectorAll("button");
for (b of buttons) {
    b.addEventListener("click", scrolltoX);
}
function scrolltoX (event) {
    const eth = event.target.getAttribute("href");
    const element = document.querySelector(eth);
    element.scrollIntoView({behavior: 'smooth'})
}


/**
 * Ajoute du blur quand on affiche la Connexion ou l'Inscription
 */
document.querySelector(".btn-connect").addEventListener("click", addBlurBackground);
document.querySelector(".btn-sign-in").addEventListener("click", addBlurBackground);
function addBlurBackground () {
    document.querySelector(":root").style.filter = 'blur(2px)';
}
function removeBlurBackground () {
    document.querySelector(":root").style.filter = 'blur(0px)';
}