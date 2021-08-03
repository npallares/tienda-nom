import { createContext, useState, useContext, useEffect } from "react";
import { getFirestore } from "../client/client";


import { Detail } from "../Components/productComponents/indexProduct";
import { ShopContext } from "../context/shopContext";

export const CartContext = createContext();

export const CartComponentContext = ({children}) =>{

    const [cart, setCart]= useState([])
    const [cartQuantity, setCartQuantity]= useState([])
    const [corroborate,setCorroborate] = useState(0)
    const [total, setTotal] = useState(0)
    const [quantityShop,setQuantityShop] = useState(0)

    const estadoGlobal = useContext(ShopContext);

    const corroborateStock =(item)=>{
        const corroborate = estadoGlobal.find(el=>el.id === item.id)
        setCorroborate(corroborate)
    }

    // Seteo de agregado al carrito

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

    // Obtener Importe Total de compra

    const getTotal = () =>{
        const finalPrice = cart.reduce((acc,el)=>acc + el.price*el.stock,0);
        setTotal(finalPrice);
        console.log(finalPrice);
    }


    // Seteo del numero referente al icono cart

    const itemsQuantity=(itemQunatity)=>{
        const findItem = cart.find(el=>el.id === itemQunatity.id)
        if(findItem && findItem.stock + itemQunatity.number > itemQunatity.stock){
                setCartQuantity( cart.reduce((acc,el)=>acc + el.stock,0))
        } else {
            const setQuantity = cart.reduce((acc,el)=> acc + el.stock,0)
            const newQuantity = setQuantity + itemQunatity.number
            setCartQuantity(newQuantity) // seteo de icono chango
            }
    }


    // Seteo de cantidad, al sumar el stock del productos 

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
    }


    // Seteo de cantidad, al restar el stock del productos 

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

            setCartQuantity(posNum) // seteo de icono chango
        }

    }

    // Crear orden de compra y pasaje parametros a firebase

    const createOrder = (name,phone,email) =>{
        const order = {buyer:{name,phone,email}, item:cart, finalAmount:total}
        console.log(order)
        const db = getFirestore();
        db.collection("orders").add(order).then(({id}) =>{console.log(id)});
    }

    useEffect(() => {
        getTotal()
    }, [cart])
   
    return <CartContext.Provider value={{cart, setCart, addToCart, corroborateStock,itemsQuantity,cartQuantity,setCartQuantity,newQuantityShopSuma,newQuantityShopResta,total,createOrder}}>
        {children}
    </CartContext.Provider>

}

