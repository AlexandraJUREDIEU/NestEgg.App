import CardPrice from "../assets/components/CardPricing"
import Slider from "../assets/components/Slider"
import React, { useState, useEffect } from "react";
import styled from "styled-components";

//style
const PricingStyle = styled.section`

  .slider{
    border: black 3px solid;
  }
  .h1-tarifs{
    color:#DDB993;
    font-size:6em;
    position:relative;
    top:0.5em;
  }

  .slide-item {
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
    h3{
      font-size:3em;
    }

    .list-cardPrice{
      display:flex;
      justify-content: space-around;
      margin: 0 115px;
      height:30em;
      padding:2em 0;



      flex-wrap: nowrap;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 6.25em;
      -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
    .list-cardPrice button {
      font-size:1.5em;
      margin:10em auto;
    }
    .list-cardPrice div:nth-child(1) div button {
      background-color:rgba(255,255,255,0.2);
    }

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

    }
    .list-cardPrice > div:nth-child(2), .list-cardPrice > div:nth-child(3) {
      width:33.33%;
      border-left:white solid 3px;
    }
    .list-cardPrice > div {
      width:33.33%;
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
//Reaction at the change of the size of the screen
const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 769);
useEffect(() => {
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 769);
  };
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);



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
    
  if (window.innerWidth < 769) {
    return (<>
    <PricingStyle >
        <h1 className="h1-tarifs">NOS TARIFS</h1>
        <Slider pages={slidesTarifs} index={0} />
    </PricingStyle>
    </>);
  } else {
    return (<>
    <PricingStyle >
        <h1 className="h1-tarifs">NOS TARIFS</h1>
        <div className="list-cardPrice">
        <CardPrice offerName={slidesTarifs[0].props.children.props.offerName} description={slidesTarifs[0].props.children.props.description} price={slidesTarifs[0].props.children.props.price}/>
        <CardPrice offerName={slidesTarifs[1].props.children.props.offerName} description={slidesTarifs[1].props.children.props.description} price={slidesTarifs[1].props.children.props.price}/>
        <CardPrice offerName={slidesTarifs[2].props.children.props.offerName} description={slidesTarifs[2].props.children.props.description} price={slidesTarifs[2].props.children.props.price}/>
        </div>
    </PricingStyle>
    </>);

  }
}

export default Pricing