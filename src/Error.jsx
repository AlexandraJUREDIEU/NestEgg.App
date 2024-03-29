//Imports
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";



//Styles
const ErrorStyle = createGlobalStyle`
#root{
  height: 100vh;
  background-image: url("../404 - presentation.png");
  background-position: 80% 20%;
  background-size: cover;
  background-repeat: no-repeat;
  display:flex;
  justify-content: flex-start;
  
}

.bloc-404{
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  height:100%;
  width: 60%;
  gap:2.5em;
}

.balmy-text{
  font-family: "Balmy"
}

h1{
  font-size: 14em;
  color: #DEBA94;
  margin-bottom: -0.3em;
}

p{
  font-size:1.5em;
  span{
    font-size:2em;
  }
}
`


//Fonctions

function Error() {
    //State
    //Comportement
    //Render
    return (
      <>
        <ErrorStyle/>
        <section className="bloc-404">
        <h1 className="balmy-text">404</h1>
        <p><span>Oups...</span> On ne fait pas d'omelette<br/>sans casser des oeufs</p>
        <p>Cette page semble introuvable</p>
        <button><Link to="/" className="balmy-text" >retour</Link></button>
        </section>
      </>
    )
  }
  
  export default Error;