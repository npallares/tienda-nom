import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "../ItemComponents/card";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { CartContext } from "../../context/cartContext";


export const ItemListContainer = () =>{
    const estadoGlobal = useContext(ShopContext);
        console.log(estadoGlobal)
    useEffect(()=>{
        document.title="Tienda Nom"
    },[])  

    return(
        
        <div className="mlContainer">
            {estadoGlobal.map(el=>{
                return(
                    <Card {...el}/>
                )
            })}
        </div>
        
    )
}