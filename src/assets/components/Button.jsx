/** ReadMe
 * This buttons needs different props : 
 * - action : This will be a function who defines what happens when the button is clicked || REQUIRED
 * - to : Defines the location where the buttons sends you || OPTIONNAL
 * - className : give a class to the button || OPTIONNAL
 * - content : the text inside the button || REQUIRED
 * */ 


import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 0.5em 2.5em;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 6.25em;
  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: white;
  margin: 0 auto;
  border: none;
`;

const LinkStyle = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5em;
`;

const ButtonLink = ({ to, className, content}) => {


  return (
    <ButtonStyle className={className} >
      <LinkStyle to={to}>{content}</LinkStyle>
    </ButtonStyle>
  );
};

const Button = ({ onClick, className, content, type, span }) => {
  return (
    <ButtonStyle className={className} onClick={onClick} type={type}>
      <div> {content} </div> <span className='balmy'>{span}</span>
    </ButtonStyle>
  );
};

export { ButtonLink, Button };
