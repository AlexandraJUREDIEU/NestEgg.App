function CardCollaborator({src, name, description, spanName}){
    return (<>
        <div className="div-card-collaborator">
            <img src={src} alt={name} />
            <div>
                <h2>{name}{spanName}</h2>
                <p>{description}</p>
            </div>
        </div>
    </>)
}

export default CardCollaborator