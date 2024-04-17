/** ReadMe
 * This progressBar have only optional props : 
 * - progress : determine the actual progress of the bar (default 0 but highly advised) || OPTIONNAL
 * Style:
 * - width : the width of the bar (default 200) || OPTIONNAL
 * - color1 : the color of the left part of the bar (default green) || OPTIONNAL
 * - color2 : the color of the right part of the bar (default #fff2) || OPTIONNAL
 * - height : the height of the bar (default 40) || OPTIONNAL
 */

import React from 'react';
import styled from 'styled-components';

const StyleProgressBar = styled.div`
  .conteneur {
    height: ${props => props.height};
    z-index: 100;
    border-radius: 10px;
    display:flex;
    align-items: center; /* Centrer verticalement */
  }
  .rectangle1 {
    background: ${props => props.color1};
    width: calc(${props => props.width}px * ${props => props.progress} / 100);
    height: ${props => props.height};
    z-index: 200;
    border-radius: 10px;
    display:inline-block;
    text-align: center;
    line-height: ${props => props.height};
    text-align:left;
  }
  .rectangle2 {
    position:absolute;
    background: ${props => props.color2};
    width: ${props => props.width}px;
    height: ${props => props.height};
    z-index: 100;
    border-radius: 10px;
    display:inline-block;
    text-align: center;
    line-height: ${props => props.height};
  }
`;

const ProgressBar = ({width = 200, progress = 0, color1= "green", color2="#fff2", height="40px"}) => {
  return (
    <>
      <StyleProgressBar progress={progress} width={width} color1={color1} color2={color2} height={height}>
        <div className="conteneur">
          <div className="rectangle1">{progress>10 && `${progress}%`}</div>
          <div className="rectangle2">{progress<=10 && `${progress}%`}</div>
        </div>
      </StyleProgressBar>
    </>
  );
};

export default ProgressBar;
