import "./style.css"
import { Card } from "./card.jsx"
import nike from"./assets/nike.jpg"
import adidas from"./assets/adidas.jpg"

export const ItemListContainer = ({data}) =>{
    
    return(
        <>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/> 
            <div className="bienvenidos">
                <h1>{data}</h1>
            </div>
            <div className="itemContainer">
                 <Card img={nike}title={"zapatillas Nike"} description={"Descripción zapatillas Nike, Descripción zapatillas Nike"}/>
                 <Card img={nike}title={"zapatillas Nike"} description={"Descripción zapatillas Nike, Descripción zapatillas Nike"}/>
                 <Card img={adidas}title={"zapatillas Adidas"} description={"Descripción zapatillas Adidas, Descripción zapatillas Adidas"}/>
                 <Card img={adidas}title={"zapatillas Adidas"} description={"Descripción zapatillas Adidas, Descripción zapatillas Adidas"}/>
               
            </div>
        </>
    )
}
