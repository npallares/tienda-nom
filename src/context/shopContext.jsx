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
                setList(RESPONSE.docs.map (el => el.data()))
                
        }
        getData()

        console.log(list)

    }, [])


   
    return <ShopContext.Provider value={list} >
        {children}
    </ShopContext.Provider>
}