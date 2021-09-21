import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "./card";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

export const ItemListContainerAdidas = () => {
  
  const [adidas, setAdidas] = useState([]);
 
  useEffect(() => {

    const localStore=(JSON.parse(window.localStorage.getItem(`store`)))
    
    
    async function getAdidas() {
        const adidasProducts = localStore.filter((el) => el.marca === "adidas");
        setAdidas(adidasProducts);
    }
    getAdidas();
      
    
  }, []);

       return (
           
         <div className="mlContainer">
           { adidas.map((el) => {
               return <Card key={el.id} {...el} />;
             })}
         </div>
       );
};
