import { Link } from "react-router-dom";

function FooterMain(){
    return(
        <>
            <footer>
                <div>
                    <p>NEST EGG</p>
                    <p>support@nestegg.fr</p>
                    <p>33000 Bordeaux</p>
                </div>
                <div>
                    <p>Une question ? <Link>Contactez-nous</Link></p>
                    <Link to="/signin">Rejoignez nous</Link>
                    <div>
                        <img src="" alt="Instagram" />
                        <img src="" alt="Facebook" />
                        <img src="" alt="Linkedin" />
                    </div>
                    <p>© 2024 - Nest Egg</p>
                </div>
                <div>
                    <Link>Mentions légales</Link>
                    <Link>Politique de confidentialité</Link>
                    <Link>Cookies</Link>
                </div>
            </footer>
        </>
    )
}

export default FooterMain