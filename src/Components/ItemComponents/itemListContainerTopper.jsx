import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "./card";
import ItemCarrousell from "./ItemCarrousell";


export const ItemListContainerTopper = () =>{
    
    const[topper, setTopper] = useState([]);
    const imagesTopper = ["topper2.png","topper1.png"]
     
    useEffect(()=>{

        const localStore=(JSON.parse(window.localStorage.getItem(`store`)))

        async function getTopper(){
            const topperProducts = localStore.filter(el=>el.marca === "topper")
            setTopper(topperProducts)
        }
        getTopper()
    },[])  

    return(
        <>
            <ItemCarrousell autoplay={true} images={imagesTopper}/>
            <div className="mlContainer">
                {topper.map(el=>{
                    return(
                        <Card key={el.id} {...el}/>
                    )
                })}
            </div>
        </>
        
    )
}