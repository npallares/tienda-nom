import "./style.css"
import { Card } from "./card.jsx"
import "./assets/adidas.jpg"
import adidas from "./assets/adidas.jpg"
import nike from "./assets/nike.jpg"

export const ItemListContainer = ({data}) =>{
    
    return(
        <>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/> 
            <div className="bienvenidos">
                <h1>{data}</h1>
            </div>
            <div className="itemContainer">
                <Card img={adidas} title={"Zapatillas Adidas"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
                <Card img={nike} title={"Zapatillas Nike"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
                <Card img={adidas} title={"Zapatillas Adidas"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
                <Card img={nike} title={"Zapatillas Nike"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
            </div>
        </>
    )
}
