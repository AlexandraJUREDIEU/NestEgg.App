
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