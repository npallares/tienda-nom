import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "./card";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";


export const ItemListContainerZapatillas = () =>{
    
    const[zapatillas, setZapatillas] = useState([]);
  
    useEffect(()=>{

        const localStore=(JSON.parse(window.localStorage.getItem(`store`)))

        async function getZapatillas(){
            const zapatillasProducts = localStore.filter(el=>el.categoria === "zapatillas")
            setZapatillas(zapatillasProducts) 
        }
        getZapatillas()
    },[])  

    return(
            <div className="mlContainer">
                {zapatillas.map(el=>{
                    return(
                        <Card key={el.id} {...el}/>
                    )
                })}
            </div>
        
        
    )
}