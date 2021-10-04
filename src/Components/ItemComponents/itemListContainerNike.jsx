import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "./card";
import ItemCarrousell from "./ItemCarrousell"

export const ItemListContainerNike = () =>{
    
    const[nike, setNike] = useState([]);

    const imagesNike = ["nike1.jpg", "nike2.jpg"];
    
    useEffect(()=>{

        const localStore=(JSON.parse(window.localStorage.getItem(`store`)))

        async function getNike(){
            const nikeProducts = localStore.filter(el=>el.marca === "nike")
            setNike(nikeProducts)
        }
        getNike()
    },[])  

    return( 
        <>
            <ItemCarrousell autoplay={true} images={imagesNike}/>
            <div className="mlContainer">
                {nike.map(el=>{
                    return(
                        <Card key={el.id} {...el}/>
                    )
                })}
            </div>
            </>
        
    )
}