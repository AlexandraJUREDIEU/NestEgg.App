import Input from "../assets/components/Input";

function Login() {
    return (
        <form method="get">
            <Input type="email" placeholder="E-mail"/>
            <Input type="password" placeholder="Mot de passe"/>
            
            <p>Mot de passe oublié ? Cliquez <a href="/">ici</a></p>
            
            <p>Je n'ai pas de compte. <a href="/signin">M'inscrire</a></p>
        </form>
    );
}

export default Login;
