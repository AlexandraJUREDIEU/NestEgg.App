import CardCollaborator from "../assets/components/CardCollaborator";
import Text from "../assets/components/Text";
import Slider from "../assets/components/Slider";

import styled from "styled-components";

//style
const AboutUsStyle = styled.div`

  #about-us {
    margin:115px;
    border: black 3px solid;
  }

  h2 {
    color:#DDB993;
  }
  .h2AndIntro {
    color: skyblue;
    margin: 0 15%;
  }
  .slider{
    border: black 3px solid;
  }

  @media screen and (min-width: 769px) {
    .slider {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
      grid-auto-rows: minmax(100px, auto);

      
      border: green 3px solid;
    }

    .slide-item {
        border: red 3px solid;
        margin:1em;
    }
    .slide-item0 {
      grid-row: 1;
      grid-column: 1 / 3;
    }
    .slide-item1 {
      grid-row: 2;
      grid-column: 1 / 3;
    }
    .slide-item2 {
      grid-row: 1 / 3;
      grid-column: 3;
    }
    .slide-item3 {
      grid-row: 1 / 3;
      grid-column: 4;
    }

    .slide-item0 > .div-card-collaborator, .slide-item1 > .div-card-collaborator {
      display:flex;
      flex-direction:row;
    }



  }





  }

  
`;

function AboutUs2() {
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

          <Slider pages={slidesQuiSommesNous} index={0} />
        </section>
      </AboutUsStyle>
    </>
  );
}

export default AboutUs2;
