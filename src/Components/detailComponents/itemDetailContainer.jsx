import "./style.css";
import React, { useState, useEffect } from "react";
import {Detail} from "../productComponents/indexProduct.jsx"
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";


export const ItemDetailContainer = () =>{
    
    const estadoGlobal = useContext(ShopContext);

    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const {productoId} = useParams();    

    useEffect(()=>{
        
            document.title="Tienda Nom"
                console.log(estadoGlobal)
                let filtrado = estadoGlobal.filter(el=> `:${el.id}` == productoId)
                setItem(filtrado);
                setLoading(false)

                console.log(filtrado)
                console.log(item)     
       
    },[productoId])
    
    if(loading) return <h3>Loading</h3>

    return(
        <>
            <div className="container">
                <Detail {...item[0]}/>
            </div>
        </>
    )
}