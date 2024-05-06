import Input from "../assets/components/Input";
import styled from "styled-components";
import HeaderForm from "../assets/components/Headerform";
import FooterForm from "../assets/components/FooterForm";
import { useState } from "react";
import { useAuth } from "../auth/AuthWrapper";
import { set } from "mongoose";

// Style

const LoginStyle = styled.div`
height: 85vh;
background: rgb(92, 39, 116);
background: linear-gradient(180deg, rgba(92, 39, 116, 1) 0%, rgba(57, 96, 203, 1) 100%);
font-family: "Quicksand";

position:absolute;
top: 15vh;
width:100vw;
left:0;

input{
    border: none;
    box-sizing: border-box;
    color: white;
    text-align: center;
    height: 3.25em;
    margin-top: 1em;
}

form{
    margin-top: 3em;
}

input::placeholder{
    color: white;
}

.forget-password{
    font-size: 0.75em;
    margin-top: 0.25em;
}

label{
    font-size: 0.75em;
}

.div-remember-me{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    margin-top: 3em;
}
`;

function Login() {

    const { loginAuth } = useAuth();

    
    const loginOnClick = (e) => {
        const emailInput = document.querySelector("input[name='email']").value;
        const passwordInput = document.querySelector("input[name='password']").value;
        console.log({ emailUser: emailInput, password: passwordInput });
        console.log({ emailUser: emailInput, password: passwordInput });
        loginAuth({ emailUser: emailInput, password: passwordInput });

        e.preventDefault();
    }

    return (
        <LoginStyle>
            <HeaderForm content="CONNEXION"/>
            <form method="post">
                <Input name="email" type="email" value="email" placeholder="E-mail" />
                <Input name="password" type="password" value="password" placeholder="Mot de passe" />
                
                <p className="forget-password">Mot de passe oublié ? Cliquez <a href="/">ici</a></p>

                <div className="div-remember-me">
                <input type="radio" id="remember-me" name="remember-me" value="remember me"></input>
                <label htmlFor="remember-me">Se souvenir de moi</label>
                </div>

                <button onClick={loginOnClick}>valider</button>
            </form>
        </LoginStyle>
    );
}

export default Login;
