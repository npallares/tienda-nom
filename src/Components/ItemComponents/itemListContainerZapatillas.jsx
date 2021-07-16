import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "./card";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";


export const ItemListContainerZapatillas = () =>{
    const estadoGlobal = useContext(ShopContext);
    const[zapatillas, setZapatillas] = useState([]);
        
    
    
    
    
    useEffect(()=>{
        async function getZapatillas(){
            const zapatillasProducts = estadoGlobal.filter(el=>el.categoria === "zapatillas")
            setZapatillas(zapatillasProducts)   
            console.log(zapatillasProducts)
        }
        getZapatillas()
    },[])  

    return(
            <div className="mlContainer">
                {zapatillas.map(el=>{
                    return(
                        <Card {...el}/>
                    )
                })}
            </div>
        
        
    )
}