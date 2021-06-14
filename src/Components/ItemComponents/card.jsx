export const Card = ({img,title,description}) =>{
    return(
        <>
        <div className="card">
            <img src={img} alt="" className="imagen"/>
            <div>
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
            </div>
        </div>
        </>
    )
}