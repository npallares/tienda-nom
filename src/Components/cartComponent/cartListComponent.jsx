import React, { useState, useEffect } from "react";
import "./style.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { CartDetailList } from "./cartDetailList";

export const CartListComponent = () =>{


    const cartGlobal = useContext(CartContext)

    const [lista, setLista] = useState([])
    
    const reset = () =>{
        cartGlobal.setCart([])
        setLista([])
        cartGlobal.setCartQuantity(0)
    }
    
    useEffect(() => {
        setLista(cartGlobal.cart)
    }, [])

    return(
        <div className="container_general">
            <div className="container_cart_all">
                {lista.map(el=>{
                    return(
                        <div>
                            <CartDetailList {...el}/>
                        </div>
                        )
                    })
                }

                <button className ="btn" onClick={reset}>Reset Cart</button>
            </div>
        </div>
    )
}
