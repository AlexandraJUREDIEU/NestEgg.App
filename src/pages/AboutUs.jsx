import CardCollaborator from "../assets/components/CardCollaborator";
import Text from "../assets/components/Text";
import Slider from "../assets/components/Slider";

import styled from "styled-components";

import React, { useState, useEffect } from "react";

//style
const AboutUsStyle = styled.div`
  #about-us {
    outline: red 3px black;
    height: 100vh;
  }
  h2 {
    color: #ddb993;
    font-size: 2em;
  }
  .h2AndIntro {
    margin: 0 15%;
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
  @media screen and (min-width: 769px) {
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
    .slide-item {
      padding: 1em;
    }
    .slide-item0 {
      grid-column: 1 / 3;
      grid-row: 1;
    }
    .slide-item1 {
      grid-column: 1 / 3;
      grid-row: 2;
    }
    .slide-item2 {
      grid-column: 3 / 4;
      grid-row: 1 / 3;
    }
    .slide-item3 {
      grid-column: 4;
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

  //Code
  let slidesQuiSommesNous = [];
  slidesQuiSommesNous.push(
    <CardCollaborator
      src="https://placehold.co/100"
      name="Alexandra"
      spanName="JUREDIEU"
      description=" Lorem ipsum dolor sit amet, consectetur adipisci elit,  sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrum exercitationem ullam corporis suscipit  laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur."
    />
  );
  slidesQuiSommesNous.push(
    <CardCollaborator
      src="https://placehold.co/100"
      name="Sofien"
      spanName="TEBOURBI"
      description=" Aliquet lectus proin nibh nisl condimentum id venenatis. Dolor magna eget est lorem ipsum. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Feugiat pretium nibh ipsum consequat nisl vel pretium."
    />
  );
  slidesQuiSommesNous.push(
    <CardCollaborator
      src="https://placehold.co/100"
      name="Luca"
      spanName="LEROY"
      description=" Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Consequat id porta nibh venenatis cras sed felis eget. Non nisi est sit amet. At elementum eu facilisis sed odio morbi quis."
    />
  );
  slidesQuiSommesNous.push(
    <CardCollaborator
      src="https://placehold.co/100"
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

          {isSmallScreen ? (
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
