import React, { useState, useEffect } from "react";
import "./style.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { CartDetailList } from "./cartDetailList";

export const CartListComponent = () =>{


    const {cart, setCart, setCartQuantity ,createOrder, eliminar} = useContext(CartContext)

    const [lista, setLista] = useState([])

    const [email, setEmail]= useState(``)
    const [phone, setPhone]= useState(``)
    const [name, setName]= useState(``)
    
    

   /*  const reset = () =>{
        setCart([{}])
        setLista([])
        setCartQuantity(0)
        window.localStorage.removeItem("lista")
    } */

    const setLocalStorage = (value) =>{
   
        window.localStorage.setItem("lista", value)
    }

    
    useEffect(() => {
        if(cart){
            if(cart.length > 0){
                setLista(cart)
               // console.log("HOLAAAAA")
                //console.log(cart)
                setLocalStorage(JSON.stringify(cart))
            } else {
                setCart(JSON.parse(window.localStorage.getItem(`lista`)))
                // console.log("CHAU")
                setLista(cart)
            }
        } else if(!cart) {
            console.log("JIJI")
            setLista([])
        }

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

                {/* <button className ="btn">Reset Cart</button> */}
            </div>
            <div class="container_input_all">
                <div className="desc_container" id="desc_container">Para finalizar su compra complete los siguientes campos</div>
                <div className="container_input" id="container_input">
                    <input className="desc_input" type="text" onInput={(e)=>{setName(e.target.value)}} placeholder="Nombre" />
                    <input className="desc_input" type="tel" onInput={(e)=>{setPhone(e.target.value)}} placeholder="Teléfono" />
                    <input className="desc_input" type="email" onInput={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
                    <button class="btn_enviar" onClick={()=>{
                        createOrder(name,phone,email);
                        const $finish = document.getElementById("finish_container")
                        const $desc = document.getElementById("desc_container") 
                        const $containerInput = document.getElementById("container_input")
                        
                        $finish.classList.remove("disp_none")
                        $desc.classList.add("disp_none")
                        $containerInput.classList.add("disp_none")
                    }}>Enviar</button>
                </div>
                <div className="finish_container disp_none" id="finish_container">Su compra está siendo procesada, ¡Muchas gracias!</div>
            </div>
            
        </div>
    )
}
