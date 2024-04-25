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
  .h2AndIntro {
    margin: 0 2em;
  }
  h2 {
    color: #ddb993;
  }
  .h2AndIntro h2 {
    margin: 1.5em 0;
    font-size: 1.75em;
    font-weight:300;
  }
  .slider {
    height:69vh;
  }
  .slides {
    overflow-y: auto;
  }
  .intro-about-us {
    display: none;
  }
  .slide-item{
    margin-bottom:1em;
  }
  @media screen and (max-width: 769px) {
    font-size: 1.25em;
    .h2AndIntro {
      margin: 0;
    }
    .slides {
      padding: 10px;
    }
    .div-card-collaborator h2 {
      font-size:1.5em;
    }
  }
  @media screen and (min-width: 769px) {
    font-size: 1.5em;
    .intro-about-us {
      display: flex;
    }
    .div-card-collaborator {
      display: flex;
      flex-direction: column;
    }
    .div-card-collaborator div {
      margin: 0 2em;
    }
    .intro-about-us {
      margin: 0 2em;
    }
    img {
      display: flow;
      height: 5em;
      width: 5em;
      margin: 0 auto;
    }
    .div-card-collaborator {
      justify-content: center;
      /*
display: flex;
flex-direction: row;
*/
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 1em;
    .h2AndIntro{
      height:20vh;
    }
    .slider{
      height:80vh;
    }
    .slides1and2, .slide-item {
      justify-content: center;
      height:80vh;
    }
    .slide-item{
      
      /*
      justify-content: center;
      align-items: center;
      display:flex;
      */

    }

    .h2AndIntro h2 {
      font-size: 3em;
    }

    .intro-about-us {
      display: flex;
    }
    .slides {
      display: grid;
      grid-gap: 1vw;
      grid-template-columns: 39vw 23vw 23vw;
      grid-auto-rows: auto auto;
      padding: 0 7em;
    }
    h2 {
      display: inline;
      white-space: nowrap;
    }
    .slide-item0 {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    .slide-item1 {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      margin-top:1em;
    }
    .slide-item2 {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
    }
    .slide-item3 {
      grid-column: 3 / 4;
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
    .slides1and2 {
      width:100%;
      display:flex;
      align-items:start;
      flex-direction:column;
    }
    .slides {
      overflow-y: auto;
      width: 100%;
    }
  }


  @media screen and (min-width: 1280px) and (min-height: 700px) {
    font-size: 1.25em;
  }

  @media screen and (min-width: 1600px) {
    font-size: 1.5em;
  }
  @media screen and (min-height: 1000px) {
    font-size: 1.5em;
  }

  @media screen and (max-height: 500px) {
    font-size:1.25em;
    .h2AndIntro h2 {
      margin:0;
    }
  }
  @media screen and (max-height: 370px) {
    font-size:1em;
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
      src="public\icons-user-round.png"
      name="Alexandra"
      spanName="JUREDIEU"
      description=" Lorem ipsum dolor sit amet, consectetur adipisci elit,  sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrum exercitationem ullam corporis suscipit  laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur."
    />
  );
  slidesQuiSommesNous.push(
    <CardCollaborator
      src="public\icons-user-round.png"
      name="Sofien"
      spanName="TEBOURBI"
      description=" Aliquet lectus proin nibh nisl condimentum id venenatis. Dolor magna eget est lorem ipsum. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Feugiat pretium nibh ipsum consequat nisl vel pretium."
    />
  );
  slidesQuiSommesNous.push(
    <CardCollaborator
      src="public\icons-user-round.png"
      name="Luca"
      spanName="LEROY"
      description=" Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Consequat id porta nibh venenatis cras sed felis eget. Non nisi est sit amet. At elementum eu facilisis sed odio morbi quis."
    />
  );
  slidesQuiSommesNous.push(
    <CardCollaborator
      src="public\icons-user-round.png"
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

          {screenSize === "mobile" || screenSize === "tablet" ? (
            <Slider pages={slidesQuiSommesNous} paginationOffset={"-0.7em"} />
          ) : (
            <>
              <div className="slider">
                <div className="slides">
                  <div className="slides1and2">
                    <div className={`slide-item slide-item0`} key="0">
                      {slidesQuiSommesNous[0]}
                    </div>
                    <div className={`slide-item slide-item1`} key="1">
                      {slidesQuiSommesNous[1]}
                    </div>
                  </div>
                  <div className={`slide-item slide-item2`} key="2">
                    {slidesQuiSommesNous[2]}
                  </div>
                  <div className={`slide-item slide-item3`} key="3">
                    {slidesQuiSommesNous[3]}
                  </div>
                </div>
              </div>
            </>
          )}
        </section>
      </AboutUsStyle>
    </>
  );
}
export default AboutUs;
