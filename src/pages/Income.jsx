import {Input} from "../assets/components/Input";
import Wrapper from "../assets/components/Wrapper";

function Income(){
    return(<>
        <h1>Bonjour Alexandra</h1>
        <p>Plus que 120 jours pour remplir votre objectif</p>
        <Wrapper
        initial={<p>Alexandra</p>}
        deroule={<>
        <p>Salaire N°1</p>
        <Input
            type="number"
        />
        <p>Arrive aux alentours du : </p>
        <Input
            type="number"
        />
        
        </>}
        />
    </>)
}

export default Income