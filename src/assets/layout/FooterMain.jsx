//import
import { Link } from "react-router-dom";
import styled from "styled-components";

//Styles

const FooterMainStyle = styled.footer`
font-size: 0.75em;
display: flex;
flex-direction: column;
padding: 0.25em;
margin: auto;
height: 15vh;
text-align: center;

img{
    height: 1.875em;
}

.text-contact-us{
    margin-top: 0.25em;
}

.footer-col{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.25em;
    margin: 0.5em;
}

.footer-col-2{
    display: none;
}



.footer-col-3{
    display: none;
}

.footer-col-4{
    display: flex;
    flex-direction: column;
}

.footer-col-4 a{
    text-decoration: none;
}


@media screen and (min-width: 540px){
    .footer-col-2{
        display: flex;
    }
}
`

function FooterMain(){
    return(
        <>
            <FooterMainStyle>
            <p className="text-contact-us">Une question ? <Link>Contactez-nous</Link></p>
            <div className="footer-col">
                <div className="footer-col-1">
                    <p>NEST EGG</p>
                    <p>support@nestegg.fr</p>
                    <p>33000 Bordeaux</p>
                </div>
                <div className="footer-col-2">
                    <Link to="/signin" className="text-join-us">Rejoignez nous</Link>
                    <div className="footer-col-3">
                        <img src="public\insta-logo.png" alt="Instagram" />
                        <img src="public\facebook-logo.png" alt="Facebook" />
                        <img src="public\linkedin-logo.png" alt="Linkedin" />
                    </div>
                </div>
                <div className="footer-col-4">
                    <Link>Mentions légales</Link>
                    <Link>Politique de confidentialité</Link>
                    <Link>Cookies</Link>
                </div>
                </div>
                    <p className="copyright">© 2024 - Nest Egg</p>
            </FooterMainStyle>
        </>
    )
}

export default FooterMain