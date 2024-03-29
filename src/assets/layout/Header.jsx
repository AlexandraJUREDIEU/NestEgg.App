//Imports
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";

//Styles
const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15vh;
    padding: 0.5em 2em 0em 1em ;
`
const LinkLogo = styled(Link)`
 height:100%;
    img{
        height:100%;
    }
`
const ImageIco = styled.img`
    height:30%;
`

//Fonctions

export default function HeaderContainer({ links }) {
    //State
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    //Comportement
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    //Render
    return (<>
        <HeaderStyle>
            <LinkLogo to="/" >
                <img src="/public/logo_nestegg.png" alt="Logo NestEgg" className="header-logo"/>
            </LinkLogo>
            <ImageIco src="/public/icons-menu-hamburger.png" alt="Menu" className="header-ico-menu" onClick={toggleMenu}/>
        </HeaderStyle>
        {isMenuOpen && (
               <nav>
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}><Link to={link.to}>{link.text}</Link></li>
                        ))}
                    </ul>
               </nav>
            )}
        <Outlet/>  
    </>
        
    )
  }
