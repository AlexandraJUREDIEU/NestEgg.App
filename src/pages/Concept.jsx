import { ButtonLink } from "../assets/components/Button";
import Text from "../assets/components/Text";
import styled from "styled-components";
import Slider from "../assets/components/Slider";
import React, { useState, useEffect } from "react";

//styles
const ConceptStyle = styled.section`
  height: 100vh;

  .screen-nest-egg {
    display: none;
  }

  .screen-concept {
    width: 8em;
    height: 8em;
  }

  .bird-and-signin {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
  }

  .button-concept {
    margin: auto 0;
  }

  @media screen and (min-width: 540px) {
    .slide-item {
      font-size: 1.5em;
      margin: 0 7em;
    }
  }

  @media screen and (min-width: 1280px) {
    .screen-nest-egg {
      display: flex;
      height: 600px;
      margin: auto 0;
    }
    .telImage-Slider {
      display:flex;
      flex-direction:row;
    }
    .tellImage {
        margin: auto 0 auto 50px;
    }
  }
`;

function Concept() {
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

  let sliderConcept = [];
  sliderConcept.push(
    <>
      <Text
        className="concept-para-1"
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
        className="concept-para-2"
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
          </span>
        }
      />
    </>
  );

  sliderConcept.push(
    <>
      <Text
        className="concept-para-3"
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
        {isSmallScreen ? (
          <Slider pages={sliderConcept}></Slider>
        ) : (
          <>
          <div className="telImage-Slider">
            <aside className="tellImage">
              <img
                src="public\screenshot-nestEgg.png"
                alt="Téléphone Screenshot Nest-egg"
                className="screen-nest-egg"
              />
            </aside>
            <div className="slider">
              <div className="slides">
                {sliderConcept.map((slide, index) => (
                  <div className={`slide-item slide-item${index}`} key={index}>
                    {slide}
                  </div>
                ))}
              </div>
            </div>
            </div>
          </>
        )}

        <div className="bird-and-signin">
          <div className="bird-concept-aside">
            <img
              src="public\bird-concept.png"
              alt="bird concept"
              className="screen-concept"
            />
          </div>
          <ButtonLink
            to="/signin"
            content="Rejoins Max"
            className="button-concept"
          />
        </div>
      </ConceptStyle>
    </>
  );
}

export default Concept;
