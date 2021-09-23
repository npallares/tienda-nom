import { createContext, useState, useContext, useEffect } from "react";
import { getFirestore } from "../client/client";
import { ShopContext } from "../context/shopContext";

export const CartContext = createContext();

// Local list recupera del storage los elementos para setearlos como parametro de inicio de cart 
const localList=(JSON.parse(window.localStorage.getItem(`lista`)))

// LocalQuantity suma la cantidad de stock en el storage para ser usado como valor inicial de cartQuantity
const localQuantity = localList.reduce((acc,el)=>acc+el.stock,0)

export const CartComponentContext = ({children}) =>{

    const [cart, setCart]= useState(localList)
    const [cartQuantity, setCartQuantity]= useState(localQuantity)
    const [corroborate,setCorroborate] = useState(0)
    const [total, setTotal] = useState(0)
    const estadoGlobal = useContext(ShopContext);

    /// Seteo de varaible para corroboración de stock
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
                    return {...el,stock:el.stock}  // seteo de item con cantidad maxima : stock     
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

    // Obtener Importe Total por item
    const getTotal = () =>{
        if(cart){
        const finalPrice = cart.reduce((acc,el)=>acc + el.price*el.stock,0);
        setTotal(finalPrice);
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

    // Eliminar item
    const eliminar =(item)=>{
        if(cart.length>1){
            const newCart = cart.filter(el=> el.id !== item.id)
            setCart(newCart)
            const newCartIconNumber = newCart.reduce((acc,el)=> acc + el.stock,0)            
            setCartQuantity(newCartIconNumber)
        } else {
            setCart([])
            window.localStorage.setItem("lista", JSON.stringify([]))
            setCartQuantity(0)
        }
    }

    


    useEffect(() => {
        getTotal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart])
   
    return <CartContext.Provider value={{cart, setCart, addToCart, corroborateStock,itemsQuantity,cartQuantity,setCartQuantity,newQuantityShopSuma,newQuantityShopResta,total,createOrder, eliminar}}>
        {children}
    </CartContext.Provider>

}

