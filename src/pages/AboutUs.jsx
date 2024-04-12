import CardCollaborator from "../assets/components/CardCollaborator";
import Text from "../assets/components/Text";
import Slider from "../assets/components/Slider";

import styled from "styled-components";

import React, { useState, useEffect } from "react";



//style
const AboutUsStyle = styled.div`
  #about-us {
    margin: 115px;
  }

  h2 {
    color: #ddb993;
  }
  .h2AndIntro {
    color: skyblue;
    margin: 0 15%;
  }
  .slider {
  }

  .intro-about-us{
    display:none;
  }

  @media screen and (min-width: 769px) {
    .intro-about-us{
      display:flex;
    }

    .slider {
    }

    .slides {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
      grid-auto-rows: minmax(100px, auto);
    }
    .slide-item {
      padding:1em;
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
    .slide-item0 .div-card-collaborator, .slide-item1 .div-card-collaborator {
      display:flex;
      flex-direction:row;
      text-align: left;
    }
    .slide-item0 .div-card-collaborator div, .slide-item1 .div-card-collaborator div {
      padding-left:1em;
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

  if (window.innerWidth < 769) {
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

            <Slider pages={slidesQuiSommesNous} index={0} />
          </section>
        </AboutUsStyle>
      </>
    );
  } else {
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

            <div className="slider">
              <div className="slides">
                <div key="0" className="slide-item slide-item0">
                  <CardCollaborator
                    src={slidesQuiSommesNous[0].props.src}
                    name={slidesQuiSommesNous[0].props.name}
                    spanName={slidesQuiSommesNous[0].props.spanName}
                    description={slidesQuiSommesNous[0].props.description}
                  />
                </div>
                <div key="1" className="slide-item slide-item1">
                  <CardCollaborator
                    src={slidesQuiSommesNous[1].props.src}
                    name={slidesQuiSommesNous[1].props.name}
                    spanName={slidesQuiSommesNous[1].props.spanName}
                    description={slidesQuiSommesNous[1].props.description}
                  />
                </div>
                <div key="2" className="slide-item slide-item2">
                  <CardCollaborator
                    src={slidesQuiSommesNous[2].props.src}
                    name={slidesQuiSommesNous[2].props.name}
                    spanName={slidesQuiSommesNous[2].props.spanName}
                    description={slidesQuiSommesNous[2].props.description}
                  />
                </div>
                <div key="3" className="slide-item slide-item3">
                  <CardCollaborator
                    src={slidesQuiSommesNous[3].props.src}
                    name={slidesQuiSommesNous[3].props.name}
                    spanName={slidesQuiSommesNous[3].props.spanName}
                    description={slidesQuiSommesNous[3].props.description}
                  />
                </div>
              </div>
            </div>
          </section>
        </AboutUsStyle>
      </>
    );
  }
}

export default AboutUs;







