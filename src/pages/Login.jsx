import {Input} from "../assets/components/Input";
import styled from "styled-components";
import HeaderForm from "../assets/components/Headerform";
import FooterForm from "../assets/components/FooterForm";
import { useState } from "react";
import { useAuth } from "../auth/AuthWrapper";
import { set } from "mongoose";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import API_URL from '../config';

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
    const navigate = useNavigate();
    
    const loginOnClick = async (e) => {
        e.preventDefault();
        const emailInput = document.querySelector("input[name='email']").value;
        const passwordInput = document.querySelector("input[name='password']").value;
        
        try {
            const response = await loginAuth({ emailUser: emailInput, password: passwordInput });
            if (response.status==200){
                const userListResponse = await axios.get(`${API_URL}/users/list`);
                const users = userListResponse.data;
                const user = users.find(user => user.email === emailInput);
                if (user) {
                    console.log("User details:", user);
                    navigate(`/dashboard?userId=${user.id}`);
                } else {
                    console.log("User not found");
                }
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };
    



















    
    // <FooterForm classNameP="balmy" content="Se connecter" contentP="Je n'ai pas de compte. " contentSpan="S'inscrire" />
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
