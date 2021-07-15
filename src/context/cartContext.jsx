import { createContext, useState, useEffect } from "react";
import { Detail } from "../Components/productComponents/indexProduct";

export const CartContext = createContext();

export const CartComponentContext = ({children}) =>{

    const [cart, setCart]= useState([])
    
    const addToCart =(item)=>{
        const itemInCart = cart.find(el=>(el.id === item.id))
        /* console.log(item) */
        if(itemInCart){
            const newCart = cart.map(el=>{
                if(el.id === item.id){
                    return {...el,stock:el.stock+item.stock}
                    
                }else{
                    return el
                } 
            })
            /* console.log(newCart) */
            setCart(newCart)
        }else{
            setCart([...cart,item])
        } 
    }

   
    return <CartContext.Provider value={{cart, addToCart}}>
        {children}
    </CartContext.Provider>

}

