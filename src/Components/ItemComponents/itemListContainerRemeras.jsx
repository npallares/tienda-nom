import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "./card";


export const ItemListContainerRemeras = () =>{
    
    const[remeras, setRemeras] = useState([]);
  
    useEffect(()=>{

        const localStore=(JSON.parse(window.localStorage.getItem(`store`)))

        async function getRemeras(){
            const remerasProducts = localStore.filter(el=>el.categoria === "remeras")
            setRemeras(remerasProducts)
        }
        getRemeras()
    },[])  

    return(
            <div className="mlContainer">
                {remeras.map(el=>{
                    return(
                        <Card key={el.id} {...el}/>
                    )
                })}
            </div>
        
        
    )
}