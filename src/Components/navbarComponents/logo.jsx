/* eslint-disable jsx-a11y/alt-text */
import "./navbar.css"
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

export const LogoModule =()=>{
    return(
        <>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/> 
            <Link to="/"><div className="contenedorimg">
                Nom
            </div></Link>
            {/* <input type="text" placeholder="Buscar por Categoria" onChange={(event) =>{console.log(event.target.value)}} onSubmit={(ev)=>{}} id="buscador"/> */}
             
        </>
    )
}