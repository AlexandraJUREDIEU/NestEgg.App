import Input from "./assets/components/Input";

function SignIn() {
    return (
        <form method="get">
            <Input type="text" placeholder="Nom"/>
            <Input type="text" placeholder="Prénom"/>
            <Input type="email" placeholder="E-mail"/>
            <Input type="password" placeholder="Mot de passe"/>
            
            <Input type="checkbox" value=""/>
            <Input type="checkbox" value=""/>
          
            
            <Input type="submit" value="Me connecter"/>
            <p>J'ai déjà un compte. <a href="/login">Me connecter</a></p>
        </form>
    );
}

export default SignIn;
