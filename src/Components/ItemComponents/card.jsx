import { Link } from "react-router-dom"

export const Card = ({img,id,price}) =>{
    return(
        <>
        <div className="card">
            <div className="imgContainer">
                <img src={img} alt="" className="imagen"/>
            </div>
            <div className="textContainer">
                <p className="description">Precio $ {price}</p>
            </div>
            <Link to={`/producto/:${id}`}><button className="button">Comprar ahora</button></Link>
        </div>
        </>
    )
}