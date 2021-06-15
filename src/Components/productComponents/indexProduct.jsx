import React, {useState} from "react";
import "./style.css"
import nike from "../ItemComponents/assets/nike.jpg"

let description = "Las zapatillas Adidas Multix confeccionadas en exterior deportivo de malla mantiene tus pies cómodos sin importar lo que te depare del día. La suela de caucho ofrece el agarre que necesitás, mientras que el diseño deportivo con colores impactantes te dan el estilo ideal para la vida urbana. "

let title="Zapatillas Nike Air Max 90"

export const Contador =()=>{

    const [stock,setStock] = useState(5)
    const [numero, setNumero] = useState(0);


    const aumentar =()=>{
        if(!stock <= 0){
        console.log("Click Aumentar");
        setNumero(numero+1)
        setStock(stock-1)
        }
    }
    
    const reducir =()=>{
        if(!numero<=0){
        console.log("Click Reducir");
        setNumero(numero-1)
        setStock(stock+1)
        }
    }

    return(
        <>
            <div className="container_product">
                <img src={nike} alt="" />
                <div className="info_container_product">
                    <h1 className="title_product">{title}</h1>
                    <p className="description_product">{description}</p>
                    <h3 className="stock_product">Productos en Stock {stock}</h3>
                    <div className="btn_container_product">
                        <button onClick={reducir} > -</button>
                        <div>{numero}</div>
                        <button onClick={aumentar} >+</button>
                    </div>
                    <button className="btn_cart_product">Agregar al carrito</button>
                </div>
            </div>
        </>
    )

}