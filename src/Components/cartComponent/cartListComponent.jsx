import React, { useState, useEffect } from "react";
import "./style.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { CartDetailList } from "./cartDetailList";

export const CartListComponent = () =>{


    const {cart, setCart, setCartQuantity} = useContext(CartContext)

    const [lista, setLista] = useState([])
    
    const reset = () =>{
        setCart([])
        setLista([])
        setCartQuantity(0)
    }
    
    useEffect(() => {
        setLista(cart)
    }, [cart])

    return(
        <div className="container_general">
            <div className="container_cart_all">
                {lista.map(el=>{
                    return(
                        <>
                        <div className="container_cart">
                            <CartDetailList {...el}/>
                        </div>
                        </>
                        )
                    })
                }

                <button className ="btn" onClick={reset}>Reset Cart</button>
            </div>
        </div>
    )
}
