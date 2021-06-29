import "./style.css";
import React, { useState, useEffect } from "react";
import { getData } from "../../util/getdata";
import {Detail} from "../productComponents/indexProduct.jsx"


export const ItemDetailContainer = () =>{
    
    
    const [item, setItem] = useState([]);


    useEffect(()=>{
        document.title="Tienda Nom"
        const waitForData = async () =>{
            let data = await getData("nike")
            let aux = data.map(el=>{
                return{
                    id: el.id,
                    title: el.title,
                    img: el.thumbnail,
                    price: el.price,
                    quantity: el.available_quantity 
                }
                
            });
            setItem(aux[4])
        }
        waitForData()

    },[])


    return(
        <>
            <div className="container">
            <Detail img={item.img} title={item.title} price={item.price} cantidad={item.quantity}/>
            </div>
        </>
    )
}