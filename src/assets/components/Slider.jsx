/** ReadMe
 * This slider takes three props :
 * - pages : Require a LIST (like '["Abcd","Bcde",partie3];') which represents the differents slides || REQUIRED
 * - index : Which slide is visible by default (default: 0) || OPTIONNAL
 * - paginationoffset : Tell how many the pagination should move down (require an unit, can be negative)(default 0, -0.7em advised) || OPTIONNAL
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

  /* Pagination */
  .pagination-conteneur{
    position:relative;
    top: ${props => props.paginationoffset};
  }
  .pagination {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
  }
  .cercle-bordure {
    width: 0.5em;
    height: 0.5em;
    border: 1px solid white;
    border-radius: 50%;
    margin: 0 1px;
  }
  .cercle-rempli {
    width: 0.5em;
    height: 0.5em;
    background-color: white;
    border-radius: 50%;
    margin: 0 1px;
  }
`;

// Composant Slider
const Slider = ({ pages, index = 0, paginationoffset = '0' }) => {
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

  const onMouseTouchUp = () => {
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

  const onTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const onTouchMove = (e) => {
    if (!startX) return;
    setEndX(e.touches[0].clientX);
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

  //Pagination
  let length = slides.length;
  let pagination = [];
  for (let i = 0; i < length; i++) {
    if (currentSlide === i) {
      pagination.push(<div key={i} className="cercle-rempli"></div>);
    } else {
      pagination.push(<div key={i} className="cercle-bordure"></div>);
    }
  }

  return (
    <SliderStyle
      className="slider"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onMouseTouchUp}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseTouchUp}
      paginationoffset={paginationoffset}
    >
      <div className="slides">{slides[currentSlide]}</div>
      <div className="pagination-conteneur"><div className="pagination">{pagination}</div></div>
      
    </SliderStyle>
  );
};

export default Slider;
