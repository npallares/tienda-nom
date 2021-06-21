export const Card = ({img,title,description}) =>{
    return(
        <>
        <div className="card">
            <img src={img} alt="" className="imagen"/>
            <div className="textContainer">
                <h2 className="title">{title}</h2>
                <p className="description">Precio $ {description}</p>
            </div>
            <button className="button">Agregar al carrito</button>
        </div>
        </>
    )
}