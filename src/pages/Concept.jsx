import { ButtonLink } from "../assets/components/Button";
import Text from "../assets/components/Text";
import styled from "styled-components";
import Slider from "../assets/components/Slider";
import React, { useState, useEffect } from "react";

//styles
const ConceptStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  .screen-nest-egg {
    display: none;
  }
  .screen-concept {
    height: 40vh;
    max-height: 12em;
    aspect-ratio: 1 / 1;
    margin-right: 20px;
    float: right;
    z-index: 100000000;
  }
  .tellImage {
    margin: auto 0 auto 50px;
  }

  .telImage-Slider {
    display: flex;
    align-items: start;
  }

  .bird-and-signin {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    margin-top: 3em;
  }

  .button-concept {
    margin: auto 0.5em;
    text-align: center;
    justify-content: center;
  }

  .slide-item {
    margin: 0 3em 0 3em;
  }

  @media screen and (max-width: 770px) {
    .screen-concept-inside-concept {
      display: none;
    }
    .slides {
      height: 60vh;
      display: flex;
      justify-content: center;
    }
  }
  @media screen and (min-width: 540px) and (max-width: 1280px) {
    .slide-item {
      font-size: 0.8em;
    }
    .slider {
      margin-top: 0;
    }
    .slides {
      padding-top: 2em;
    }
  }
  @media screen and (min-width: 770px) {
    .button-concept {
      width: 28em;
    }
    .bird-and-signin {
      margin-top: 20px;
    }
  }
  @media screen and (min-width: 1280px) {
    font-size: 1.2em;
    .slide-item {
      margin: 0;
    }
    .screen-concept {
      height: 30vh;
      shape-outside: url("https://placehold.co/133x133");
      shape-margin: 20px;
    }
    .tellImage {
      float: left;
    }
    .concept-para {
      width: 800px;
      width: 100%;
      font-size: 1em;
    }

    .concept-para-1 {
      margin-top: 1.5em;
    }

    .button-concept {
      width: 28em;
      margin-top: -4em;
    }
    .screen-nest-egg {
      display: flex;
      height: 600px;
      margin: auto 0;
    }
    .telImage-Slider {
      display: flex;
      flex-direction: row;
    }
    .tellImage {
    }
    .slider {
      margin: 0 1em;
    }
  }
  @media screen and (min-width: 1920px) {
    font-size: 1.5em;
  }
`;

function Concept() {
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

  let sliderConcept = [];
  sliderConcept.push(
    <>
      <Text
        className="concept-para concept-para-1"
        content={
          <span>
            Salut les amis ! C&apos;est Max, votre oiseau préféré.
            <br />
            Je suis tellement ravi de vous présenter notre incroyable aventure
            appelée &quot;Nest Egg&quot; !<br />
            <br />
            Alors voilà, imaginez qu'on voyage ensemble dans le monde des
            finances, et je serai là pour vous guider et vous aider à faire
            briller votre nid financier.
            <br />
            Avec &quot;Nest Egg&quot;, on peut construire notre propre petit nid
            douillet, en créant des budgets géniaux pour économiser, dépenser
            intelligemment et atteindre tous nos rêves magiques !<br />
          </span>
        }
      />
    </>
  );

  sliderConcept.push(
    <>
      <Text
        className="concept-para concept-para-2"
        content={
          <span>
            {" "}
            Et ce n'est pas tout, on peut même inviter nos amis et notre famille
            à se joindre à nous pour gérer notre budget à plusieurs, c'est
            tellement fun !<br />
            <br />
            On peut enregistrer nos comptes bancaires préférés dans notre nid et
            je veillerai sur eux pour qu'ils grandissent et se multiplient.
            <br />
            <br />
            Quand on dépense, je trierai toutes nos dépenses dans des catégories
            colorées, comme ça, on saura toujours où va notre argent et comment
            faire pour économiser encore plus !
            <img
              src="bird-concept-autres.png"
              alt="bird concept"
              className="screen-concept screen-concept-inside-concept"
            />
          </span>
        }
      />
    </>
  );

  sliderConcept.push(
    <>
      <Text
        className="concept-para concept-para-3"
        content={
          <span>
            Alors si vous avez des projets incroyables ou des rêves fous, on va
            les réaliser ensemble avec "Nest Egg" ! Je vous montrerai comment
            planifier et atteindre tous nos objectifs financiers avec sagesse.{" "}
            <br />
            <br />
            Allez, rejoignez moi et embarquons dans cette aventure palpitante
            avec "Nest Egg" ! On va s'amuser, économiser et voler vers un avenir
            financier radieux !
          </span>
        }
      />
    </>
  );

  return (
    <>
      <ConceptStyle id="concept">
        {screenSize === "mobile" ? (
          <>
            <Slider pages={sliderConcept} paginationoffset={"-0.7em"}></Slider>
            <div>
              <img
              src="bird-concept-mobile.png"
              alt="bird concept"
              className="screen-concept"
            />
            <div className="bird-and-signin">
              <ButtonLink
                to="/signin"
                content="Rejoins Max"
                className="button-concept"
              />
            </div>
            </div>
          </>
        ) : (
          <>
            <div className="telImage-Slider">
              <aside className="tellImage">
                <img
                  src="screenshot-nestEgg.png"
                  alt="Téléphone Screenshot Nest-egg"
                  className="screen-nest-egg"
                />
              </aside>
              <div className="slider">
                <div className="slides">
                  {sliderConcept.map((slide, index) => (
                    <div
                      className={`slide-item slide-item${index}`}
                      key={index}
                    >
                      {slide}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bird-and-signin">
              <ButtonLink
                to="/signin"
                content="Rejoins Max"
                className="button-concept"
              />
            </div>
          </>
        )}
      </ConceptStyle>
    </>
  );
}

export default Concept;
