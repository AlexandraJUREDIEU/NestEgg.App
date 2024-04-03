function CardCollaborator({src, name, description, spanName}){
    return (<>
        <div>
            <img src={src} alt={name} />
            <h2>{name}{spanName}</h2>
            <p>{description}</p>
        </div>
    </>)
}

export default CardCollaborator