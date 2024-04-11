import styled from "styled-components";
import React, { useState } from "react";

// Styles
const SliderStyle = styled.div`
  .slides {
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
      return <div key={index}>{part}</div>;
    }
    return null;
  });

  if (window.innerWidth < 769) {
    return (
      <SliderStyle>
        <div
          className="slider"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
        >
          <div className="slides">{slides[currentSlide]}</div>
        </div>
      </SliderStyle>
    );
  } else {
    return <SliderStyle><div className="slides">{slides}</div></SliderStyle>;
  }
};

export default Slider;
