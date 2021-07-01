import "./style.css";
import React, { useState, useEffect } from "react";
import { Card } from "../ItemComponents/card";
import { getData } from "../../util/getdata";

export const ItemListContainer = () =>{

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        document.title="Tienda Nom"

        const waitForData = async () =>{
            let data = await getData("adidas")
            console.log(data)
            let aux = data.map(el=>{
                return{
                    id: el.id,
                    title: el.title,
                    img: el.thumbnail,
                    price: el.price
                }
            });
            setItems(aux)
            setLoading(false)
        }

        waitForData()

    },[])
    
    /* console.log(items) */

    if(loading) return <h3>Loading...</h3>

    return(
        <div className="mlContainer">
            {items.map(el=>{
                return(
                    <Card {...el}/>
                )
            })}
        </div>
        
    )
}