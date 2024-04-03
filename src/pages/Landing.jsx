import { ButtonLink } from "../assets/components/Button"

function Landing(){
    return (<>
        <section id="landing">
            <div>
                <h1>NEST <span>EGG</span></h1>
                <p>Ne mettez pas tout vos oeufs dans le même panier</p> 
                <ButtonLink to="#concept" content="Découvrir le concept"/>           
                <ButtonLink to="/dashboard" content="Accéder à mon tableau de bord"/>     
            </div>          
            <aside>
                <img src="" alt="Oeuf Nest Egg" />
            </aside>
        </section>
    </>)
}

export default Landing