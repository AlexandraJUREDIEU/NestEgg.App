//imports
import { ButtonLink } from "../assets/components/Button";
import Text from "../assets/components/Text";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

//styles

const LandingStyle = styled.section`
  .landing{
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
  }
  .conteneur-landing{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:85vh;
  }
  .landing-egg-img {
    height: 18.2em;
    padding-top:3em;
  }

  h1 {
    font-size: 2.5em;
  }

  .title-intro {
    width: 14em;
    margin: 0 auto;
  }

  .btn-landing {
    margin-top: 0.75em;
    padding: 0.87em;
    min-width: 12em;
  }

  .btn-landing a {
    font-size: 1.25em;
    font-weight: 300;
    font-family: "Quicksand";
    margin: auto;
  }

  .landing-egg-img {
    display:none;
  }

  .btnLink-landing {
  }
  aside {
    display:flex;
    align-items:center;
  }

  @media screen and (min-width: 540px) and (max-width: 1280px) {

    .landing-egg-img {
      /*height: 27.5em;
        margin-left: 8.5em;
        margin-top: 3em;*/
        display:flex;
    }
    
    h1 {
      font-size: 5em;
    }

    .title-intro {
      font-size: 2em;
    }

    .btn-landing {
      /*margin-top: 0.75em;*/
      padding: 1.25em;
      width: 31.25em;
    }

    .btn-landing a {
      font-size: 1.75em;
      font-weight: 300;
      font-family: "Quicksand";
      /*margin: auto;*/
    }
  }

  @media screen and (min-width: 840px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .landing-egg-img {
      display: flex;
      flex-direction: row;
      justify-content: end;
      /*height: 36.125em;*/
    }

    h1 {
      font-size: 5em;
    }

    .title-intro {
      font-size: 2em;
    }

    .btn-landing {
      margin-top: 0.75em;
      padding: 1.25em;
      width: 31.25em;
    }

    .btn-landing a {
      font-size: 1.75em;
      font-weight: 300;
      font-family: "Quicksand";
      margin: auto;
    }
  }
  @media screen and (min-width: 1280px),
  screen and (max-height:720px) {
    #landing {
      justify-content: center;
    }
    aside {
    }
    .landing-egg-img {
      max-height:400px;
      height:80%;
    }
    .conteneur-landing p,
    .conteneur-landing button {
      /*margin: 0;*/
    }
    .conteneur-landing {
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2em;
    }
    #landing{
      width:50vh;
      height:80vh;
    }
  }
  @media screen and (max-width: 700px) {
    font-size:1em;
    
    .landing-egg-img {
      display:flex;
    }
    h1 {
      font-size:1.5em;
    }
    .title-intro{
      font-size:1em;
    }
    .btn-landing a {
      font-size:1em;
    }
    .btn-landing {
      width:20em;
      height:2em;
      padding:0;
    }
  }
`;

function Landing() {
  //Reaction at the change of the size of the screen
  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    function handleResize() {
      setScreenSize(getScreenSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getScreenSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (height < 720) {
        return "desktop";
    }
    if (width < 770) {
      return "mobile";
    } else if (width < 1280) {
      return "tablet";
    } else if (width < 1920) {
      return "laptop";
    } else {
      return "desktop";
    }
  }

  return (
    <>
      <LandingStyle id="landing">
        <div className="landing">
        <div className="conteneur-landing">
          <div>
            <h1>
              NEST <span className="balmy">EGG</span>
            </h1>
            <Text
              className="title-intro"
              content="Ne mettez pas tout vos oeufs dans le même panier"
            />
          </div>
          {(screenSize === "mobile" || screenSize === "tablet") && (
            <aside>
              <img
                src="oeuf-nestEgg.png"
                alt="Oeuf Nest Egg"
                className="landing-egg-img"
              />
            </aside>
          )}
          <div className="btnLink-landing">
            <ButtonLink
              to="#concept"
              className="btn-landing btn-landing-1"
              content="Découvrir le concept"
            />
            <ButtonLink
              to="/dashboard"
              className="btn-landing btn-landing-2"
              content="Accéder à mon tableau de bord"
            />
          </div>
        </div>
        {(screenSize === "laptop" || screenSize === "desktop") && (
          <aside>
            <img
              src="oeuf-nestEgg.png"
              alt="Oeuf Nest Egg"
              className="landing-egg-img"
            />
          </aside>
        )}
        </div>
      </LandingStyle>
    </>
  );
}

export default Landing;
