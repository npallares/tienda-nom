import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getFirestore } from "../client/client";

export const ShopContext = createContext();

export const ShopComponentContext = ({children}) =>{
    
    const [list, setList] = useState([])
    
    
    useEffect(()=>{
        
        async function getData(){
            const DB = getFirestore(); // Conexion base de datos
            const COLLECTION = DB.collection("productos") // tomamos coleccion
            const RESPONSE = await COLLECTION.get()
            const DATA = RESPONSE.docs.map (el => el.data())
            localStorage.setItem("store",JSON.stringify(DATA))
            setList(JSON.parse(window.localStorage.getItem(`store`)))
                
        }
        getData()

    }, [])


   
    return <ShopContext.Provider value={list} >
        {children}
    </ShopContext.Provider>
}