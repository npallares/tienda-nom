import "./navbar.css"
import chango from "./assets/chango.png"

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
                <li><img src={chango} className="chango" /></li>
            </ul>
        </>
    )
}