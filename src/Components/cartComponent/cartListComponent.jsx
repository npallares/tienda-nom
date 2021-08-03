import React, { useState, useEffect } from "react";
import "./style.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { CartDetailList } from "./cartDetailList";

export const CartListComponent = () =>{


    const {cart, setCart, setCartQuantity,total} = useContext(CartContext)

    const [lista, setLista] = useState([])

    const [email, setEmail]= useState(``)
    const [phone, setPhone]= useState(``)
    const [name, setName]= useState(``)
    
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
                        <div className="container_cart">
                            <CartDetailList {...el}/>
                        </div>
                        )
                    })
                }

                <button className ="btn" onClick={reset}>Reset Cart</button>
            </div>
            <div>
                <input type="email" onInput={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
                <input type="tel" onInput={(e)=>{setPhone(e.target.value)}} placeholder="Tel." />
                <input type="text" onInput={(e)=>{setName(e.target.value)}} placeholder="Nombre" />
            </div>
                <button onClick={()=>{
                    console.log({name,phone,email})
                    const venta = {buyer:{name,phone,email}, item:lista, finalPrice:total,}
                    console.log(venta)
                }}>Enviar</button>
            
        </div>
    )
}
