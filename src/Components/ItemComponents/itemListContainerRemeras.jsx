import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "./card";
import ItemCarrousell from "./ItemCarrousell";


export const ItemListContainerRemeras = () =>{
    
    const[remeras, setRemeras] = useState([]);
    const imagesRemeras = ["remeras1.png","remeras2.png"]
  
    useEffect(()=>{

        const localStore=(JSON.parse(window.localStorage.getItem(`store`)))

        async function getRemeras(){
            const remerasProducts = localStore.filter(el=>el.categoria === "remeras")
            setRemeras(remerasProducts)
        }
        getRemeras()
    },[])  

    return(
        <>
            <ItemCarrousell autoplay={true} images={imagesRemeras}/>
            <div className="mlContainer">
                {remeras.map(el=>{
                    return(
                        <Card key={el.id} {...el}/>
                    )
                })}
            </div>
        </>
        
    )
}