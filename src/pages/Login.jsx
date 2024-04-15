import Input from "../assets/components/Input";
import styled from "styled-components";
import HeaderForm from "../assets/components/Headerform";

// Style

const LoginStyle = styled.div`
    height: 85vh;
    box-sizing: border-box;
    

`;

function Login() {
    return (
        <LoginStyle>
            <HeaderForm content="CONNEXION"/>
            <form method="get">
                <Input type="email" placeholder="E-mail"/>
                <Input type="password" placeholder="Mot de passe"/>
                
                <p>Mot de passe oublié ? Cliquez <a href="/">ici</a></p>
                
                <p>Je n'ai pas de compte. <a href="/signin">S'inscrire</a></p>
            </form>
        </LoginStyle>
    );
}

export default Login;
