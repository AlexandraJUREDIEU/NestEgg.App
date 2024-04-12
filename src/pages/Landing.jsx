//imports
import { ButtonLink } from "../assets/components/Button"
import Text from "../assets/components/Text"
import styled from 'styled-components';

//styles

const LandingStyle = styled.section`

height: 85vh;
display: flex;
flex-direction: column;


.landing-egg-img{
    height: 15.2em;
    margin-top: 1.5em;
    margin-left: 3.5em;
}

h1{
    font-size: 2.5em;
}

.title-intro{
    width : 14em;
    margin: auto;
}


.btn-landing{
    margin-top: 0.75em;
    padding: 0.87em;
    min-width: 12em;
}

.btn-landing a{
    font-size: 1em;
    font-weight: 300;
    font-family: "Quicksand";
    margin: auto;
}

@media screen and (min-width: 540px){
    
    .landing-egg-img{
        height: 27.5em;
        margin-left: 8.5em;
        margin-top: 3em;
    }
    
    h1{
        font-size: 5em;
    }
    
    .title-intro{
        font-size: 2em;
        width : 17em;
        margin: auto;
    }
    
    
    .btn-landing{
        margin-top: 0.75em;
        padding: 1.25em;
        width: 31.25em;
    }
    
    .btn-landing a{
        font-size: 1.75em;
        font-weight: 300;
        font-family: "Quicksand";
        margin: auto;
    }
}


@media screen and (min-width: 840px){
    display: flex;
    flex-direction: row;
    justify-content: center;
        

    .landing-egg-img{
        display: flex;
        flex-direction: row;
        justify-content: end;
        height: 36.125em;
        margin-left: 8.5em;
        margin-top: 3em;
    }
    
    h1{
        font-size: 5em;
    }
    
    .title-intro{
        font-size: 2em;
        width : 17em;
        margin: auto;
    }
    
    
    .btn-landing{
        margin-top: 0.75em;
        padding: 1.25em;
        width: 31.25em;
    }
    
    .btn-landing a{
        font-size: 1.75em;
        font-weight: 300;
        font-family: "Quicksand";
        margin: auto;
    }
    
      
}
`

function Landing(){
    return (<>
        <LandingStyle id="landing">
            <div>
                <h1>NEST <span className="balmy">EGG</span></h1>
                <Text className="title-intro" content="Ne mettez pas tout vos oeufs dans le même panier"/>
                <aside>
                <img src="public\oeuf-nestEgg.png" alt="Oeuf Nest Egg" className="landing-egg-img"/>
                </aside>
                <ButtonLink to="#concept" className="btn-landing btn-landing-1" content="Découvrir le concept"/>           
                <ButtonLink to="/dashboard" className="btn-landing btn-landing-2" content="Accéder à mon tableau de bord"/>     
            </div>          
            
        </LandingStyle>
    </>)
}

export default Landing