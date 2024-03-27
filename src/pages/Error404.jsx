// Import 
import Button from "../components/Button"
import HeaderStyle from "../styles/HeaderStyle"
import Style404 from "../styles/404Style"
import Text from "../components/Text"
import Span from "../components/Span"

// Styles




// Functions
export default function Error404(){
      // State
     //Comportement
      //Return
    return(<>
        <header>
            <HeaderStyle><img src="public\logoSansTexte.png" alt="" /></HeaderStyle>
        </header>

        <main className="mainerror404">
        <Style404>
            <h1 className="balmy title-404">404</h1>
        <Text className="text-404" content="On ne fait pas d’omelette sans casser des œufs. Cette page semble introuvable.">
            <Span className="span-404" children="Oups..."/></Text>
        <Button content="RETOUR" className="button-return-home"/>
        </Style404>
        </main>
        </>
    )
};