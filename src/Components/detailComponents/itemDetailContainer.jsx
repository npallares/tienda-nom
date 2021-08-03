import "./style.css";
import React, { useState, useEffect } from "react";
import {Detail} from "../productComponents/indexProduct.jsx"
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";




export const ItemDetailContainer = () =>{
    
    const estadoGlobal = useContext(ShopContext);
    
    /* console.log(cartGlobal.info) */

    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const {productoId} = useParams();    

    const setLocalStorage = (value) =>{
        
        window.localStorage.setItem("product", value)
    }

    useEffect(()=>{
        
            document.title="Tienda Nom"
                let filtrado = estadoGlobal.filter(el=> `:${el.id}` == productoId)
                setItem(filtrado);
                setLoading(false)

            if(filtrado.length > 0){
                setLocalStorage(JSON.stringify(filtrado))
            } else {
                setItem(JSON.parse(window.localStorage.getItem(`product`)))
            }

               

    },[productoId])
    
    if(loading) return <h3>Loading</h3>

    return(
        <>
            <div className="container_general_product">
                <Detail {...item[0]}/>
            </div>
        </>
    )
}