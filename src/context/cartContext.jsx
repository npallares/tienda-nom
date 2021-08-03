import { createContext, useState, useContext } from "react";


import { Detail } from "../Components/productComponents/indexProduct";
import { ShopContext } from "../context/shopContext";

export const CartContext = createContext();

export const CartComponentContext = ({children}) =>{

    const [cart, setCart]= useState([])
    const [cartQuantity, setCartQuantity]= useState([])
    const [corroborate,setCorroborate] = useState(0)
    const [quantityShop,setQuantityShop] = useState(0)

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
                    return {...el,stock:el.stock}          // seteo de item con cantidad maxima : stock     
                }else if(el.id === item.id){  
                    if(el.stock>corroborate.stock){                        
                        return {...el,stock:corroborate.stock}
                    }else{
                        const suma = el.stock + item.stock
                        if(suma > el.stock && suma > corroborate.stock){                                
                            
                                return{...el,stock:el.stock}
                            }                            
                         return {...el,stock:suma}
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


    // Seteo del numero referente al icono cart

    const itemsQuantity=(itemQunatity)=>{
        const findItem = cart.find(el=>el.id === itemQunatity.id)
        if(findItem && findItem.stock + itemQunatity.number > itemQunatity.stock){
                setCartQuantity( cart.reduce((acc,el)=>acc + el.stock,0))
        } else {
            const setQuantity = cart.reduce((acc,el)=> acc + el.stock,0)
            const newQuantity = setQuantity + itemQunatity.number
            setCartQuantity(newQuantity)
            }
    }



    const newQuantityShopSuma =(number,id)=>{
        
        const newNumber = number+1

        const maxAux = estadoGlobal.find(el=>el.id === id)

        if(newNumber>=maxAux.stock+1){
            
        }else{

            const aux = cart.find(el=>el.id === id)

            const newStockCart = cart.map(el=>{
                if(el === aux){
                    return{...el,stock:newNumber}
                }else{
                    return(el)
                }
            })

            setCart(newStockCart)

            // seteo de icono chango

            const newCartIconNumber = cart.reduce((acc,el)=> acc + el.stock,1)
            console.log(newCartIconNumber)
            
            setCartQuantity(newCartIconNumber)
        }

        console.log(estadoGlobal)
        console.log(maxAux.stock)

    }



    const newQuantityShopResta =(number,id)=>{
        
        const newNumber = number-1

        if(newNumber<0){
            
        }else{

            const aux = cart.find(el=>el.id === id)

            const newStockCart = cart.map(el=>{
                if(el === aux){
                    return{...el,stock:newNumber}
                }else{
                    return(el)
                }
            })

            setCart(newStockCart)

            // seteo de icono chango

            const newCartIconNumber = cart.reduce((acc,el)=> acc - el.stock,1)
            console.log(newCartIconNumber)
            
            const posNum = (newCartIconNumber < 0) ? newCartIconNumber * -1 : newCartIconNumber;

            setCartQuantity(posNum)
        }

    }
   
    return <CartContext.Provider value={{cart, setCart, addToCart, corroborateStock,itemsQuantity,cartQuantity,setCartQuantity,newQuantityShopSuma,newQuantityShopResta}}>
        {children}
    </CartContext.Provider>

}

