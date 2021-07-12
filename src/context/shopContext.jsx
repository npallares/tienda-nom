import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../util/getdata";
import { createContext } from "react";

export const ShopContext = createContext();

export const ShopComponentContext = ({children}) =>{
    
    const [list, setList] = useState([])
    
    
    useEffect(()=>{

        const waitForData = async () =>{
            let data = await getData("river")
            console.log(data)
            let aux = data.map(el=>{
                return{
                    id: el.id,
                    title: el.title,
                    img: el.thumbnail,
                    price: el.price,
                    cantidad: el.available_quantity 
                }
            });
            setList(aux)
        }
        waitForData()
        console.log(list)

    }, [])


   
    return <ShopContext.Provider value={list} >
        {children}
    </ShopContext.Provider>
}