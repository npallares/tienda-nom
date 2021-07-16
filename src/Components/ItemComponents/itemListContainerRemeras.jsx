import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "./card";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";


export const ItemListContainerRemeras = () =>{
    const estadoGlobal = useContext(ShopContext);
    const[remeras, setRemeras] = useState([]);
        
    
    
    
    
    useEffect(()=>{
        async function getRemeras(){
            const remerasProducts = estadoGlobal.filter(el=>el.categoria === "remeras")
            setRemeras(remerasProducts)   
            console.log(remerasProducts)
        }
        getRemeras()
    },[])  

    return(
            <div className="mlContainer">
                {remeras.map(el=>{
                    return(
                        <Card {...el}/>
                    )
                })}
            </div>
        
        
    )
}