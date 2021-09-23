import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "./card";


export const ItemListContainerBuzos = () =>{
    
    const[buzos, setBuzos] = useState([]);
   
    useEffect(()=>{

        const localStore=(JSON.parse(window.localStorage.getItem(`store`)))

        async function getBuzos(){
            const buzosProducts = localStore.filter(el=>el.categoria === "buzos")
            setBuzos(buzosProducts)
        }
        getBuzos()
    },[])  

    return(
            <div className="mlContainer">
                {buzos.map(el=>{
                    return(
                        <Card key={el.id} {...el}/>
                    )
                })}
            </div>
        
        
    )
}