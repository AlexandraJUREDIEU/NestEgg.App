import CardPrice from "../assets/components/CardPricing"
import Slider from "../assets/components/Slider"

import styled from "styled-components";

//style
const PricingStyle = styled.section`

  .slider{
    border: black 3px solid;
  }
  .h1-tarifs{
    color:#DDB993;
    font-size:3em;
    position:relative;
    top:0.5em;
  }

  .slide-item {
    border: red 3px solid;
    width:100%;
    height:30em;
    padding:2em 0;
}

.slider {
  padding: 0.5em 2.5em;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 6.25em;
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: white;
  margin: auto;
  border: none;
}


  @media screen and (min-width: 769px) {
    .slider {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      grid-auto-rows: minmax(100px, auto);

      



      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: nowrap;
      padding: 0.5em 2.5em;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 6.25em;
      -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      color: white;
      margin: auto;
      border: none;

      margin: 0 115px;

      border: green 3px solid;
    }

    .h1-tarifs{
      font-size:6em;
    }

    .slide-item {
        width:33.33%;
        height:30em;
    }
    .slide-item0 {
      grid-row: 1;
      grid-column: 1 / 2;
    }
    .slide-item1 {
      grid-row: 1;
      grid-column: 2 / 3;
    }
    .slide-item2 {
      grid-row: 1;
      grid-column: 3 / 4;
    }

    .slide-item0 > .div-card-collaborator, .slide-item1 > .div-card-collaborator {
      display:flex;
      flex-direction:row;
    }

  }
  }
`;






function Pricing(){
    let slidesTarifs = [];
    slidesTarifs.push(
        <>
          <CardPrice offerName="SMART" description="Offre gratuite" price="GRATUIT"/>
        </>
      );
    slidesTarifs.push(
        <>
          <CardPrice offerName="MAX" description="Offre max" price="2.99/ MOIS"/>
        </>
      );
    slidesTarifs.push(
        <>
          <CardPrice offerName="BUSINESS" description="Offre business" price="5.99/ MOIS"/>
        </>
      );
    
    return (<>
    <PricingStyle >
        <h1 className="h1-tarifs">NOS TARIFS</h1>
        <Slider pages={slidesTarifs} index={0} />
    </PricingStyle>
    </>)
}

export default Pricing