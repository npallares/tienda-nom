import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartComponentContext = ({children}) =>{

    const [info, setInfo]= useState([])
    const [aux, setAux]=useState([])
    
    let filtrado = info.map(el => {
        return el.img
    })

    let buscador = filtrado.find(el =>{ return el === aux[0].img});
    

        
    if(buscador){
        console.log("true")
    }else{ 
        console.log("false")
    }
    
    useEffect(() => {
        console.log(info)
        console.log(aux)
        console.log(buscador)
        console.log(filtrado)

    }, [])
    
    return <CartContext.Provider value={{info, setInfo, aux, setAux}}>
        {children}
    </CartContext.Provider>

}