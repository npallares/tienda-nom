import "./navbar.css"
import logo from "./assets/logo.png"
import chango from "./assets/chango.png"
import menu from "./assets/menu.png"

export const Navbar =()=> {
    return(
        <span>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap" rel="stylesheet"/> 
            <nav className="nav">
                <div className="contenedorimg"><img src={logo} className="logo" />
                    NP TIENDA
                </div>
                
                <div class="onlyresponsive">
                    <div><img src={menu} className="menu" /></div>
                </div>

                <ul className="responsive">
                    <li>Categorias </li>
                    <li>Ofertas</li>
                    <li>Historial</li>
                    <li>Supermercado</li>
                    <li>Moda</li>
                    <li><img src={chango} className="chango" /></li>
                </ul>
            </nav>
        </span>
    )
}