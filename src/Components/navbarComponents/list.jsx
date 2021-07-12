import "./navbar.css"
import chango from "./assets/chango.png"
import { Link } from "react-router-dom"

export const ListModule = () =>{
    return(
        <>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap" rel="stylesheet"/> 

            <ul className="responsive">
                <li>Categorias </li>
                <li>Ofertas</li>
                <li>Historial</li>
                <li>Supermercado</li>
                <li>Moda</li>
                <Link to={`/cart`}><li><img src={chango} className="chango" /></li></Link>
            </ul>
        </>
    )
}