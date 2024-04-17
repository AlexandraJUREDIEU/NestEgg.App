import CardPrice from "../assets/components/CardPricing";
import Slider from "../assets/components/Slider";
import Text from "../assets/components/Text"
import React, { useState, useEffect } from "react";
import styled from "styled-components";

//style
const PricingStyle = styled.section`
  height: 75vh;
  .h1-tarifs {
    color: #ddb993;
    font-size: 3em;
    margin-top:1em;
  }
  .slide-item {
    padding: 2em 0;
    height: 70vh;
  }
  .slider {
    padding: 0.5em 2.5em;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 6.25em;
    -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: white;
    margin: auto 3em;
    border: none;
  }
  p {
    margin: 0 7em;
  }

  @media screen and (min-width: 769px && max-width: 1279px) {
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

      height: 200px;
      margin-bottom: 1em;
    }
    .div-cardPricing {
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      height:100%;
      align-items: flex-end
    }
    .div-cardPricing h3{
      align-self: flex-start;
    }
    .button-cardpricing{
      align-self: flex-end;
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 1.5em;
    .h1-tarifs {
      font-size: 6em;
    }
    h3 {
      font-size: 2em;
    }
    .list-cardPrice {
      display: flex;
      justify-content: space-around;
      margin: 0 7em;
      height: 20em;
      padding: 2em 0;

      flex-wrap: nowrap;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 6.25em;
      -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
    .list-cardPrice button {
      font-size: 1.5em;
      margin: 5em auto;
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
      font-size: 6em;
    }
    .slide-item {
      width: 33.33%;
      height: 25em;
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
      <CardPrice offerName="MAX" description="Offre max" price="2,99€/ MOIS" />
    </>
  );
  slidesTarifs.push(
    <>
      <CardPrice
        offerName="BUSINESS"
        description="Offre business"
        price="5,99€/ MOIS"
      />
    </>
  );

  return (
    <>
      <PricingStyle>
        <h1 className="h1-tarifs balmy">NOS TARIFS</h1>
        {isSmallScreen ? (
          <Slider pages={slidesTarifs} index={0} />
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
                        props: { offerName, description, price },
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
