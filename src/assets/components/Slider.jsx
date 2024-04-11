/** ReadMe
 * This slider takes two props : 
 * - pages : Require a LIST (like '["Abcd","Bcde",partie3];') which represents the differents slides || REQUIRED
 * - index : Which slide is visible by default (default: 0) || OPTIONNAL
 * 
 * An example of use is present at the end
 * The slider will get the class 'slider'
 * The items of the sliders will get the class 'slide-item' as well as 'slide-item[X]' where X is the number of the slide
 * */



import styled from "styled-components";
import React, { useState } from "react";

// Styles
const SliderStyle = styled.div`
  .slides {
    display: flex;
    flex-direction: column;
  }
  .slider {
  }

`;

// Composant Slider
const Slider = ({ pages, index = 0 }) => {
  // State
  const [currentSlide, setCurrentSlide] = useState(index);
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);
  const minSwipeDistance = 50;

  // Comportement
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === pages.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? pages.length - 1 : prevSlide - 1
    );
  };

  const onMouseDown = (e) => {
    setStartX(e.clientX);
  };

  const onMouseUp = () => {
    if (!startX || !endX) return;
    const distance = startX - endX;
    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setStartX(null);
    setEndX(null);
  };

  const onMouseMove = (e) => {
    if (!startX) return;
    setEndX(e.clientX);
  };

  // Render
  const slides = pages.map((part, index) => {
    if (part !== undefined) {

      return (
        <div key={index} className={`slide-item slide-item${index}`}>
          {part}
        </div>
      );


    }
    return null;
  });

  if (window.innerWidth < 769) {
    return (
        <SliderStyle
          className="slider"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
        >
          <div className="slides">{slides[currentSlide]}</div>
        </SliderStyle>
    );
  } else {
    return (
        <SliderStyle className="slider">
          {slides}
        </SliderStyle>
    );
  }
};

export default Slider;
