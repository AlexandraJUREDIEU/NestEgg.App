//import
import { Link } from "react-router-dom";
import styled from "styled-components";

//Styles

const FooterMainStyle = styled.footer`
background-color : red;
font-size: 0.75em;
display: flex;
flex-direction: row;
padding: 0.25em;
margin: auto;
height: 10vh;
text-align: center;

img{
    height: 1.875em;
}

.text-join-us{
    display: none;
}

.footer-col-3{
    display: none;
}

.footer-col-4{
    display: flex;
    flex-direction: column;
}
`

function FooterMain(){
    return(
        <>
            <FooterMainStyle>
                <div className="footer-col-1">
                    <p>NEST EGG</p>
                    <p>support@nestegg.fr</p>
                    <p>33000 Bordeaux</p>
                </div>
                <div className="footer-col-2">
                    <p classname="text-contact-us">Une question ? <Link>Contactez-nous</Link></p>
                    <Link to="/signin" className="text-join-us">Rejoignez nous</Link>
                    <div className="footer-col-3">
                        <img src="public\insta-logo.png" alt="Instagram" />
                        <img src="public\facebook-logo.png" alt="Facebook" />
                        <img src="public\linkedin-logo.png" alt="Linkedin" />
                    </div>
                    <p>© 2024 - Nest Egg</p>
                </div>
                <div className="footer-col-4">
                    <Link>Mentions légales</Link>
                    <Link>Politique de confidentialité</Link>
                    <Link>Cookies</Link>
                </div>
            </FooterMainStyle>
        </>
    )
}

export default FooterMain