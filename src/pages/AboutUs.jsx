import CardCollaborator from "../assets/components/CardCollaborator";
import Text from "../assets/components/Text";
import Slider from "../assets/components/Slider";

import styled from "styled-components";

import React, { useState, useEffect } from "react";

//style
const AboutUsStyle = styled.div`
font-size: 1.5em;

  #about-us {
    height: 100vh;
  }
  h2 {
    color: #ddb993;
    font-size: 2em;
  }
  .h2AndIntro {
    margin: 0 15%;
    margin: 3em;
  }
  .slider{
    display: flex;
    align-items: center;
  }
  .slides {
    padding: 0 4em;
    height: 100vh;
    overflow-y: auto;
  }
  .intro-about-us {
    display: none;
  }
  img{
    height: 12em;
  }
  
  @media screen and (min-width: 769px) {
    .slider {
      margin-top:6em;
    }
    font-size: 1.5em;
    .intro-about-us {
      display: flex;
    }
    .div-card-collaborator {
      display:flex;
      flex-direction:column;
    }
    .div-card-collaborator div{
      margin: 0 2em;
    }
    .intro-about-us {
      margin: 0 2em;
    }
    img{
      display: flow;
      height:10em;
      width:6em;
      margin: 0 auto;
    }
    .div-card-collaborator {
      justify-content:center;
/*
display: flex;
flex-direction: row;
*/
    }
  }
  
  @media screen and (min-width: 1080px) {
    font-size:1.5em;
    .h2AndIntro h2 {
      font-size: 3em;
    }
    .intro-about-us {
      display: flex;
      font-size: 1.25em;
    }
    .slides {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
      grid-auto-rows: minmax(100px, auto);

    padding: 0 7em;
    }
    .slide-item0 {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
    }
    .slide-item1 {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
      /* Décalage de la cellule: */
      position:relative;
      top:-8em;
    }
    .slide-item2 {
      grid-column: 3 / 4;
      grid-row: 1 / 3;
    }
    .slide-item3 {
      grid-column: 4 / 5;
      grid-row: 1 / 3;
    }
    .slide-item0 .div-card-collaborator,
    .slide-item1 .div-card-collaborator {
      display: flex;
      flex-direction: row;
      text-align: left;
    }
    .slide-item0 .div-card-collaborator div,
    .slide-item1 .div-card-collaborator div {
      padding-left: 1em;
    }
  }
`;

function AboutUs() {
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
    if (width < 769) {
      return "mobile";
    } else if (width < 1280) {
      return "tablet";
    } else if (width < 1920) {
      return "laptop";
    } else {
      return "desktop";
    }
  }

  //Code
  let slidesQuiSommesNous = [];
  slidesQuiSommesNous.push(
    <CardCollaborator
      src="public\user-round.png"
      name="Alexandra"
      spanName="JUREDIEU"
      description=" Lorem ipsum dolor sit amet, consectetur adipisci elit,  sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrum exercitationem ullam corporis suscipit  laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur."
    />
  );
  slidesQuiSommesNous.push(
    <CardCollaborator
      src="public\user-round.png"
      name="Sofien"
      spanName="TEBOURBI"
      description=" Aliquet lectus proin nibh nisl condimentum id venenatis. Dolor magna eget est lorem ipsum. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Feugiat pretium nibh ipsum consequat nisl vel pretium."
    />
  );
  slidesQuiSommesNous.push(
    <CardCollaborator
      src="public\user-round.png"
      name="Luca"
      spanName="LEROY"
      description=" Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Consequat id porta nibh venenatis cras sed felis eget. Non nisi est sit amet. At elementum eu facilisis sed odio morbi quis."
    />
  );
  slidesQuiSommesNous.push(
    <CardCollaborator
      src="public\user-round.png"
      name="Romain"
      spanName="Meese"
      description=" Maecenas pharetra convallis posuere morbi. Sit amet nulla facilisi morbi tempus iaculis urna. Nulla facilisi etiam dignissim diam quis."
    />
  );

    return (
      <>
        <AboutUsStyle>
          <section id="about-us">
            <div className="h2AndIntro">
              <h2>Qui sommes-nous ?</h2>
              <Text
                className="intro-about-us"
                content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus molestiae sequi consequuntur nesciunt voluptatibus, quam nobis perspiciatis nostrum at eaque esse neque, corrupti dolore quibusdam, impedit obcaecati? Enim, veritatis commodi?"
              />
            </div>

          {screenSize === ("mobile" || "tablet") ? (
            <Slider pages={slidesQuiSommesNous} index={0} />
          ) : (
            <div className="slider">
              <div className="slides">
                {slidesQuiSommesNous.map((slide, index) => (
                  <div className={`slide-item slide-item${index}`} key={index}>
                    {slide}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </AboutUsStyle>
    </>
  );
}
export default AboutUs;
