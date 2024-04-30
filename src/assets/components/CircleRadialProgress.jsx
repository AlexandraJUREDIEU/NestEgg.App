/** ReadMe:
 * This circle have the same props than ProgressBar:
 * - progress : determine the actual progress of the bar (default 0 but highly advised) || OPTIONNAL
 * Style:
 * - width : the width of the bar (default 200) || OPTIONNAL
 * - color1 : the color of the left part of the bar (default green) || OPTIONNAL
 * - color2 : the color of the right part of the bar (default #fff2) || OPTIONNAL
 * - height : the height of the bar (default 40) || OPTIONNAL
 */



import React from 'react';
import styled from 'styled-components';

const StyleCircleRadialProgress = styled.div`
  clip-path: circle(50%);
  width: ${props => props.size};
  height: ${props => props.size};
  position: relative;

  background: ${props =>
      props.progress < 50
        ? props.color1
        : props.color2};


  .rectangle1 {
    width: 100px; /* Est-ce que cette ligne est nécessaire ? */
    height: ${props => props.size};
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: center;
    z-index: ${props => (props.progress < 50 ? 3 : 1)};
    background: linear-gradient(calc(${props => props.progress * 3.6}deg - 90deg), ${props => props.color1} 50%, transparent 0);
  }

  .rectangle2 {
    width: ${props => props.size};
    height: ${props => props.size};
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: center;
    transform: rotate(0);
    z-index: 2;
    background: linear-gradient(-90deg, ${props => props.color2} 50%, transparent 0);
  }
`;

const CircleRadialProgress = ({ size = '100px', progress = 0, color1 = 'orange', color2 = 'green', height = '100px' }) => {
  return (
    <StyleCircleRadialProgress size={size} progress={progress} color1={color1} color2={color2} height={height}>
      <div className="rectangle1" />
      <div className="rectangle2" />
    </StyleCircleRadialProgress>
  );
};

export default CircleRadialProgress;
