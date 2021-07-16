import { createContext, useState, useContext } from "react";


import { Detail } from "../Components/productComponents/indexProduct";
import { ShopContext } from "../context/shopContext";

export const CartContext = createContext();

export const CartComponentContext = ({children}) =>{

    const [cart, setCart]= useState([])
    const [cartQuantity, setCartQuantity]= useState([])
    const [corroborate,setCorroborate] = useState(0)

    const estadoGlobal = useContext(ShopContext);

    const corroborateStock =(item)=>{
        const corroborate = estadoGlobal.find(el=>el.id === item.id)
        setCorroborate(corroborate)
    }

    
    const addToCart =(item)=>{

        const itemInCart = cart.find(el=>(el.id === item.id))
        
        if(itemInCart){
            const newCart = cart.map(el=>{
                if(el.id === item.id && el.stock >= corroborate.stock){     // comprobación de cantidad menor al stock                   
                    return {...el,stock:corroborate.stock}          // seteo de item con cantidad maxima : stock     
                }else if(el.id === item.id){  
                    if(el.stock>corroborate.stock){                        
                        return {...el,stock:corroborate.stock}
                    }else{
                        const suma = el.stock + item.stock
                        if(suma > el.stock && suma > corroborate.stock){                                
                                return{...el,stock:corroborate.stock}
                            }                            
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

    const itemsQuantity=(itemQunatity)=>{
        const setQuantity = cart.reduce((acc,el)=> acc + el.stock,0)
        const newQuantity = setQuantity + itemQunatity
        setCartQuantity(newQuantity)
    }
   
    return <CartContext.Provider value={{cart, setCart, addToCart, corroborateStock,itemsQuantity,cartQuantity,setCartQuantity}}>
        {children}
    </CartContext.Provider>

}

