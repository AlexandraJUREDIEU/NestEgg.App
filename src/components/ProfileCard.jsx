import Collaborators from '../assets/datas/Collaborators'

export default function ProfileCard(){
    return (
        <>
        {Collaborators.map((collaborator) => (
            <div key={collaborator.id}>
            <img src={collaborator.avatar} alt="Picture" />
            <h3>{collaborator.identity}</h3>
            <p>{collaborator.message}</p>
            </div>
        ))}
        
        </>
    )
}