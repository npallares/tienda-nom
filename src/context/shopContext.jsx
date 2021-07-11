import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getData } from "../util/getdata";

export const ShopContext = createContext();

export const ShopComponentContext = ({children}) =>{
    
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoding] = useState(true)
    
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
            setListProducts(aux)
        }
        waitForData()
        setLoding(false)
            console.log(listProducts)

    }, [])


    if(loading) return <h1>Loading</h1>
    return <ShopContext.Provider value={listProducts} >
        {children}
    </ShopContext.Provider>
}