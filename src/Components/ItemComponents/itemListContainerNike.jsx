import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "./card";

export const ItemListContainerNike = () =>{
    
    const[nike, setNike] = useState([]);
    
    useEffect(()=>{

        const localStore=(JSON.parse(window.localStorage.getItem(`store`)))

        async function getNike(){
            const nikeProducts = localStore.filter(el=>el.marca === "nike")
            setNike(nikeProducts)
        }
        getNike()
    },[])  

    return(
            <div className="mlContainer">
                {nike.map(el=>{
                    return(
                        <Card key={el.id} {...el}/>
                    )
                })}
            </div>
        
        
    )
}