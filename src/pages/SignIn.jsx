import Input from "../assets/components/Input";
import styled from "styled-components";
import { Button } from "../assets/components/Button";
import HeaderForm from "../assets/components/Headerform";

//styles
const SignInStyle = styled.div`
height: 85vh;
background: rgb(92, 39, 116);
background: linear-gradient(180deg, rgba(92, 39, 116, 1) 0%, rgba(57, 96, 203, 1) 100%);
font-family: "Quicksand";


input{
    border: none;
    box-sizing: border-box;
    color: white;
    text-align: center;
    height: 2em;
}

input::placeholder{
    color: white;
}
.form-signin{
    margin-top: 1em;
}

label{
    font-size: 0.625em;
}

.div-radio-signin{
    margin: 0.25em 2em;
}

.btn-signin{
    width: 11.75em;
    margin-top: 3.5em;
    justify-content: center;
}

.already-have-account{
    font-size: 0.75em;
    margin-top: 1em;
}
`;

function SignIn() {
    return (
        <SignInStyle>

        <HeaderForm  content="INSCRIPTION" />

        <form method="get" className="form-signin">
            <Input type="text" placeholder="Nom"/>
            <Input type="text" placeholder="Prénom"/>
            <Input type="email" placeholder="E-mail"/>
            <Input type="password" placeholder="Mot de passe"/>
            
            <div className="div-radio-signin">
            <input type="radio" id="radio-newsletter" name="radio-news" value="newsletter"></input>
            <label for="radio-newsletter">Je souhaite recevoir une newsletter des astuces et nouvelles fonctionnalitées proposées par “Nest Egg”</label>
            </div>

            <div className="div-radio-signin">
            <input type="radio" id="radio-ad" name="radio-ad" value="ad"></input>
            <label for="radio-ad">J’autorise Nest Egg à me proposer des offres commerciales partenaires</label>
            </div>

            <Button className="btn-signin balmy" content="M'inscrire"/>

        </form>
            <p className="already-have-account">J'ai déjà un compte. <a href="/login">Me connecter</a></p>
        </SignInStyle>
    );
}

export default SignIn;

