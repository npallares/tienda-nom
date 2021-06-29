import "./style.css"
import React, { useState, useEffect } from "react";
import {Detail} from "../productComponents/indexProduct.jsx"
import { getData } from "../../util/getdata";

export const ItemListContainer = () =>{

    const [items, setItems] = useState([]);
    let contador = 0
    
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
            setItems(aux)
        }
        
        waitForData()
        
    },[])
    
    
    return(
        <>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/> 
            
            <div className="container_item">

                { 
                
                items.map(el=>{
                    if( contador == 0 ){
                        contador = 1;
                        return <Detail img={el.img} title={el.title} description={el.price} cantidad={el.quantity}/>
                    } 
                    
                })}

                {/* ------- ACA -------- */}
                {console.log(items[4])}
                {/* {console.log(items[4].title)} */}
               
            </div>
        </>
    )
}
