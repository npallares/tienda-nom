import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "./card";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";


export const ItemListContainerAdidas = () =>{
    const estadoGlobal = useContext(ShopContext);
    const[adidas, setAdidas] = useState([]);
  
    useEffect(()=>{
        async function getAdidas(){
            const adidasProducts = estadoGlobal.filter(el=>el.marca === "adidas")
            setAdidas(adidasProducts)   
        }
        getAdidas()
    },[])  

    return(
            <div className="mlContainer">
                {adidas.map(el=>{
                    return(
                        <Card {...el}/>
                    )
                })}
            </div>
        
        
    )
}