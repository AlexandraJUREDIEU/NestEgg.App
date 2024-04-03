import { Button } from "./Button"

function CardPrice({offerName, description, price}){
    return (<>
        <div>
            <h3>Offre {offerName}</h3>
            <p>{description}</p>
            <Button content={price}/>
        </div>
    </>)
}

export default CardPrice