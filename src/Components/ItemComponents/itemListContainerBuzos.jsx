import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "./card";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";


export const ItemListContainerBuzos = () =>{
    const estadoGlobal = useContext(ShopContext);
    const[buzos, setBuzos] = useState([]);
   
    useEffect(()=>{
        async function getBuzos(){
            const buzosProducts = estadoGlobal.filter(el=>el.categoria === "buzos")
            setBuzos(buzosProducts)
        }
        getBuzos()
    },[])  

    return(
            <div className="mlContainer">
                {buzos.map(el=>{
                    return(
                        <Card {...el}/>
                    )
                })}
            </div>
        
        
    )
}