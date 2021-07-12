import React, { useState, useEffect } from "react";
import "./style.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { CartDetailList } from "./cartDetailList";

export const CartListComponent = () =>{

    const cartGlobal = useContext(CartContext)

    const [lista, setLista] = useState([])
    
    useEffect(() => {
        setLista(cartGlobal.info)
    }, [])

    return(
        <div>
            {lista.map(el=>{
                return(
                    <CartDetailList {...el}/>
                    )
                })}
        </div>
        
    )
}
