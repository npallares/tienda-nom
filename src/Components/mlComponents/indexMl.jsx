import React, { useState, useEffect } from "react";
import { Card } from "../ItemComponents/card";
import { getData } from "../../util/getdata";

export const Mercadolibre = () =>{

    const [items, setItems] = useState([]);
    
    useEffect(()=>{
        document.title="Tienda Nom"

        const waitForData = async () =>{
            let data = await getData("supermercado")
            let aux = data.map(el=>{
                return{
                    title: el.title,
                    img: el.thumbnail,
                    price: el.price
                }
            });
            setItems(aux)
        }

        waitForData()

    },[])
    
    console.log(items)

    return(
        <div className="mlContainer">
            {items.map(el=>{
                return(
                    <Card img={el.img} title={el.title} description={el.price}/>
                )
            })}
        </div>
        
    )
}