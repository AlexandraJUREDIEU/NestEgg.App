/**
 * Cache des sections au chargement de la page
 */
const aboutUsArticles = document.querySelectorAll("#about-us article");
aboutUsArticles[0].querySelector("p").setAttribute("style", "display: none");
aboutUsArticles[2].setAttribute("style", "display: none");
aboutUsArticles[3].setAttribute("style", "display: none");
aboutUsArticles[4].setAttribute("style", "display: none");

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
 * Affiche/Cache les parties Connexion/Inscription
 */
hideConnexionInscription();

authentification = document.getElementById("authentification");
element = document.querySelectorAll(".btn-connect");

for (e of element) {
    e.addEventListener("click", showConnexion);

    

    function showConnexion () {
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

    function showInscription () {
        //console.log("sI");
        inscription = document.getElementById("inscription");
        inscription.style.display = "block";
        authentification.style.display = "block";
        connexion = document.getElementById("connexion");
        connexion.style.display = "none";
    }
}

function hideConnexionInscription () {
    //console.log("hCI");
    connexion = document.getElementById("connexion");
    inscription = document.getElementById("inscription");

    authentification.style.display = "none";
    connexion.style.display = "none";
    inscription.style.display = "none";
}