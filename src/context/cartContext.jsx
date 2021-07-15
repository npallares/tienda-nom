import { createContext, useState, useEffect, useContext } from "react";


import { Detail } from "../Components/productComponents/indexProduct";
import { ShopContext } from "../context/shopContext";

export const CartContext = createContext();

export const CartComponentContext = ({children}) =>{

    const [cart, setCart]= useState([])
    const [corroborate,setCorroborate] = useState(0)

    const estadoGlobal = useContext(ShopContext);

    const corroborateStock =(item)=>{
        const corroborate = estadoGlobal.find(el=>el.id === item.id)
        setCorroborate(corroborate)
    }

    
    const addToCart =(item)=>{
        const itemInCart = cart.find(el=>(el.id === item.id))
        /* console.log(item) */
        if(itemInCart){
            const newCart = cart.map(el=>{
                if(el.id === item.id && el.stock > corroborate.stock){
                    console.log("EN EL IF")
                    console.log(corroborate)
                    return {...el,stock:corroborate.stock}
                    
                }else if(el.id === item.id){
                    console.log("EN EL ELSE")
                    if(el.stock>corroborate.stock){
                        console.log("ACA")
                        return {...el,stock:corroborate.stock}
                    }else{
                        const suma = el.stock + item.stock
                        if(suma > el.stock && suma > corroborate.stock){
                                console.log("ALLA2")
                                return{...el,stock:corroborate.stock}
                            }
                            console.log("ALLA3")
                         return {...el,stock:el.stock+item.stock}
                        }
                }else{
                    return el
                } 
                
            })
            setCart(newCart)    
            
            
        }else{
            setCart([...cart,item])
        } 
    }

   
    return <CartContext.Provider value={{cart, addToCart, corroborateStock}}>
        {children}
    </CartContext.Provider>

}

