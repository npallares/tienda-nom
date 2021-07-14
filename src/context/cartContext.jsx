import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartComponentContext = ({children}) =>{
    
    const [cart, setCart]= useState([])
    
    const addToCart =(item)=>{
        const itemInCart = cart.find(el=>(el.id === item.id))
        console.log(item)
        if(itemInCart){
            const newCart = cart.map(el=>{
                if(el.id === item.id){
                    return {...el,cantidad:el.cantidad+item.cantidad}
                }else{
                    return el
                } 
            })
            console.log(newCart)
            setCart(newCart)
        }else{
            setCart([...cart,item])
        } 
    }
    
    return <CartContext.Provider value={{cart,addToCart}}>
        {children}
    </CartContext.Provider>

}

