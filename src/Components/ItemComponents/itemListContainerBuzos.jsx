import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "./card";
import ItemCarrousell from "./ItemCarrousell";


export const ItemListContainerBuzos = () =>{
    
    const[buzos, setBuzos] = useState([]);
    const imagesBuzos = ["adidas2.jpg","topper2.png"]
   
    useEffect(()=>{

        const localStore=(JSON.parse(window.localStorage.getItem(`store`)))

        async function getBuzos(){
            const buzosProducts = localStore.filter(el=>el.categoria === "buzos")
            setBuzos(buzosProducts)
        }
        getBuzos()
    },[])  

    return(
        <>
            <ItemCarrousell autoplay={true} images={imagesBuzos}/>
            <div className="mlContainer">
                {buzos.map(el=>{
                    return(
                        <Card key={el.id} {...el}/>
                    )
                })}
            </div>
        </>
        
    )
}