import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "./card";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";


export const ItemListContainerTopper = () =>{
    const estadoGlobal = useContext(ShopContext);
    const[topper, setTopper] = useState([]);
     
    useEffect(()=>{
        async function getTopper(){
            const topperProducts = estadoGlobal.filter(el=>el.marca === "topper")
            setTopper(topperProducts)
        }
        getTopper()
    },[])  

    return(
            <div className="mlContainer">
                {topper.map(el=>{
                    return(
                        <Card {...el}/>
                    )
                })}
            </div>
        
        
    )
}