import Wrapper from "../../assets/components/Wrapper"
import ProfilLigneInvite from "../../assets/components/ProfilLigneInvite"

function Profil() {
    //State
    //Comportement
    //Render
    return (
      <>
        Bonjour Luca
        Plus que 158 jours pour remplir votre objectif

        <Wrapper
            initial={<div>Leroy Luca</div>}
            deroule={<>peepoMail@hotmail.fr</>}
        />
        Budget individuel [on/off]

        <ProfilLigneInvite
        name="Lucas"
        mail="peepoMailer@hotmail.fr" />
        <ProfilLigneInvite
        name="Lucès"
        mail="peepoMailer@hotmail.fr" />
        <ProfilLigneInvite
        name="Lucus"
        mail="peepoMailer@hotmail.fr" />

        Invitez des amis
      </>
    )
  }
  
  export default Profil;