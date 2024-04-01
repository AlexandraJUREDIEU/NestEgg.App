import Input from "./assets/components/Input";

function Login() {
    return (
        <form method="get">
            <Input type="email" placeholder="E-mail"/>
            <Input type="password" placeholder="Mot de passe"/>
            
            <p>Mot de passe oublié ? Cliquez <a href="/">ici</a></p>
            
            <Input type="radio" value="se souvenir de moi" id="rememberMe"/>
            <label for="rememberMe">Se souvenir de moi</label>
            
            <Input type="submit" value="Me connecter"/>
            <p>Je n'ai pas de compte. <a href="/signin">S'inscrire</a></p>
        </form>
    );
}

export default Login;
