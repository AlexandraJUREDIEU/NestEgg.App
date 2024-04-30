import { Button } from "./Button"
import styled from "styled-components";


// Styles
const CardPricingStyle = styled.div`
    
  .div-cardPricing h3 {
    display:flex;
    flex-direction: column;
  }

  .div-cardPricing p {
    display:none;
  }

  

`;



function CardPrice({offerName, description, price}){
    return (<>
        <CardPricingStyle>
          <div className="div-cardPricing">
            <h3>Offre <span className="balmy">{offerName}</span></h3>
            <p>{description}</p>
            <div id="button-cardpricing">
              <Button content={price}/>
            </div>
          </div>
        </CardPricingStyle>
    </>)
}

export default CardPrice