import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "./card";
import ItemCarrousell from "./ItemCarrousell";


export const ItemListContainerZapatillas = () =>{
    
    const[zapatillas, setZapatillas] = useState([]);
    const imagesZapatillas = ["adidas1.jpg","topper1.png"]
  
    useEffect(()=>{

        const localStore=(JSON.parse(window.localStorage.getItem(`store`)))

        async function getZapatillas(){
            const zapatillasProducts = localStore.filter(el=>el.categoria === "zapatillas")
            setZapatillas(zapatillasProducts) 
        }
        getZapatillas()
    },[])  

    return(
        <>
            <ItemCarrousell autoplay={true} images={imagesZapatillas}/>
            <div className="mlContainer">
                {zapatillas.map(el=>{
                    return(
                        <Card key={el.id} {...el}/>
                    )
                })}
            </div>
        </>
        
    )
}