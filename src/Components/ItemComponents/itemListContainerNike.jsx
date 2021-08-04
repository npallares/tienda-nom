import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "./card";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";


export const ItemListContainerNike = () =>{
    const estadoGlobal = useContext(ShopContext);
    const[nike, setNike] = useState([]);
    
    useEffect(()=>{
        async function getNike(){
            const nikeProducts = estadoGlobal.filter(el=>el.marca === "nike")
            setNike(nikeProducts)
        }
        getNike()
    },[])  

    return(
            <div className="mlContainer">
                {nike.map(el=>{
                    return(
                        <Card {...el}/>
                    )
                })}
            </div>
        
        
    )
}