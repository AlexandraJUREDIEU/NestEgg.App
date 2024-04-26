import CardPrice from "../assets/components/CardPricing";
import Slider from "../assets/components/Slider";
import Text from "../assets/components/Text";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

//style
const PricingStyle = styled.section`
  height: 70vh;
  .h1-tarifs {
    color: #ddb993;
    font-size: 3em;
    height: 10vh;
  }
  .slider {
    padding: 0;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 6.25em;
    -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: white;
    margin: auto 3em;
    border: none;
  }
  .div-cardPricing {
    height: 55vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2em 0;
  }
  .pagination{
    height: 5vh;
    display:flex;
    align-items: flex-end;
    positon:absolute;
    top:5px;
  }
  .button {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0 7em;
    height:15vh;
  }

  @media screen and (min-width: 769px) and (max-width: 1279px) {
    .list-cardPrice {
      margin: 0 3em;
    }
    .list-cardPrice > div {
      padding: 0.5em 2.5em;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 2em;
      -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      color: white;
      margin: auto;
      border: none;

      margin-bottom: 1em;
    }
    .div-cardPricing {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 100%;
      align-items: flex-end;
    }
    .div-cardPricing h3 {
      align-self: flex-start;
    }
    .button-cardpricing {
      align-self: flex-end;
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 1.2em;
    h3 {
      font-size: 2em;
    }
    .div-cardPricing {
      height: 45vh;
    }
    .list-cardPrice {
      display: flex;
      justify-content: space-around;
      margin: 0 7em;

      flex-wrap: nowrap;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 6.25em;
      -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
    .list-cardPrice button {
      font-size: 1.5em;
    }
    .list-cardPrice div:nth-child(1) div button {
      background-color: rgba(255, 255, 255, 0.2);
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
    .list-cardPrice > div:nth-child(2),
    .list-cardPrice > div:nth-child(3) {
      width: 33.33%;
      border-left: white solid 3px;
    }
    .list-cardPrice > div {
      width: 33.33%;
    }
    .h1-tarifs {
      margin-top: 1em;
      font-size: 3em;
    }
    .slide-item {
      width: 33.33%;
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
    .slide-item0 > .div-card-collaborator,
    .slide-item1 > .div-card-collaborator {
      display: flex;
      flex-direction: row;
    }
  }
  @media screen and (min-width: 1800px) {
    font-size: 1.5em;
  }
  @media screen and (max-height:500px){
    font-size:0.8em;
  }
`;

function Pricing() {
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
      <CardPrice
        offerName="SMART"
        description="Offre gratuite"
        price="GRATUIT"
      />
    </>
  );
  slidesTarifs.push(
    <>
      <CardPrice
      offerName="MAX"
      description="Offre max"
      price="2,99€ /"
      span="MOIS"
      />
    </>
  );
  slidesTarifs.push(
    <>
      <CardPrice
        offerName="BUSINESS"
        description="Offre business"
        price="5,99€ /"
        span="MOIS"
      />
    </>
  );

  return (
    <>
      <PricingStyle id="price">
        <h1 className="h1-tarifs balmy">NOS TARIFS</h1>
        {isSmallScreen ? (
          <Slider pages={slidesTarifs} paginationoffset={"-0.5em"}/>
        ) : (
          <>
            <Text
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet est placerat in egestas erat imperdiet sed. Auctor elit sed vulputate mi sit amet mauris commodo quis. Id volutpat lacus laoreet non. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Diam in arcu cursus euismod quis."
              className="text-pricing"
            />
            <div className="list-cardPrice">
              {slidesTarifs.map(
                (
                  {
                    props: {
                      children: {
                        props: { offerName, description, price, span },
                      },
                    },
                  },
                  index
                ) => (
                  <CardPrice
                    key={index}
                    offerName={offerName}
                    description={description}
                    price={price}
                    span={span}
                  />
                )
              )}
            </div>
          </>
        )}
      </PricingStyle>
    </>
  );
}

export default Pricing;
