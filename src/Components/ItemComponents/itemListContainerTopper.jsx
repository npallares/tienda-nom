import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "./card";


export const ItemListContainerTopper = () =>{
    
    const[topper, setTopper] = useState([]);
     
    useEffect(()=>{

        const localStore=(JSON.parse(window.localStorage.getItem(`store`)))

        async function getTopper(){
            const topperProducts = localStore.filter(el=>el.marca === "topper")
            setTopper(topperProducts)
        }
        getTopper()
    },[])  

    return(
            <div className="mlContainer">
                {topper.map(el=>{
                    return(
                        <Card key={el.id} {...el}/>
                    )
                })}
            </div>
        
        
    )
}