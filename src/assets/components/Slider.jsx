/** ReadMe
 * This slider takes two props : 
 * - pages : Require a LIST (like '["Abcd","Bcde",partie3];') which represents the differents slides || REQUIRED
 * - index : Which slide is visible by default (default: 0) || OPTIONNAL
 * 
 * An example of use is present at the end
 * */

// Import
import React, { useState } from 'react';

// Styles


// Functions
const Slider = ({ pages, index }) => {
  
  // State
  const [currentSlide, setCurrentSlide] = useState(index);
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);
  const minSwipeDistance = 50;

  //Comportement
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === pages.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? pages.length - 1 : prevSlide - 1));
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
        <div key={index}>
          {part}
        </div>
      );
    }
    return null;
  });

  return (
    <div className="slider" onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
      <div className="slides">
        {slides[currentSlide]}
      </div>
    </div>
  );
};

export default Slider;

/* Exemple of use:
//Imports
import Slider from "./assets/components/Slider"

export default function App() {
  //State
  //Comportement
  //Render


  let pages = [
    "Abcd",
    "Bcde",
    <><h1>C'est la partie 3!</h1><p>Youpi</p></>,
    "Defg"
  ];

  return (<>
      <Slider
      pages={pages}
      index={1}
      />
      </>
  )
}

*/