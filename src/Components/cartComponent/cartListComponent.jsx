import React, { useState, useEffect } from "react";
import "./style.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { CartDetailList } from "./cartDetailList";

export const CartListComponent = () =>{


    const cartGlobal = useContext(CartContext)

    const [lista, setLista] = useState([])
    
    const reset = () =>{
        cartGlobal.setInfo([])
        setLista([])
    }
    
    useEffect(() => {
        setLista(cartGlobal.info)
    }, [])

    return(
        <div>
            <div>
                {lista.map(el=>{
                    return(
                        <CartDetailList {...el}/>
                        )
                    })
                }

                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
