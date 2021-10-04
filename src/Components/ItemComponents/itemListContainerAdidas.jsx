import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "./card";
import ItemCarrousell from "./ItemCarrousell";

export const ItemListContainerAdidas = () => {
  
  const [adidas, setAdidas] = useState([]);

  const imagesAdidas = ["adidas1.jpg", "adidas2.jpg"];
 
  useEffect(() => {

    const localStore=(JSON.parse(window.localStorage.getItem(`store`)))
    
    
    async function getAdidas() {
        const adidasProducts = localStore.filter((el) => el.marca === "adidas");
        setAdidas(adidasProducts);
    }
    getAdidas();
      
    
  }, []);

       return (
         <>
          <ItemCarrousell autoplay={true} images={imagesAdidas} />
         <div className="mlContainer">
           { adidas.map((el) => {
               return <Card key={el.id} {...el} />;
             })}
         </div>
         </>
       );
};
