import "./style.css";
import React, { useState, useEffect } from "react";
import { getData } from "../../util/getdata";
import {Detail} from "../productComponents/indexProduct.jsx"
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () =>{
    
    
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);

    const {productoId} = useParams();

    

    useEffect(()=>{
        
            document.title="Tienda Nom"
            const waitForData = async () =>{
                let data = await getData("adidas")
                let aux = data.map(el=>{
                    return{
                        id: el.id,
                        title: el.title,
                        img: el.thumbnail,
                        price: el.price,
                        cantidad: el.available_quantity 
                    }
                    
                });
                let filtrado = aux.filter(el=> `:${el.id}` == productoId)
                setItem(filtrado);
                setLoading(false)
                console.log(filtrado)
                
            }
            waitForData()
            
       
    },[])
    
    
    if(loading) return <h3>Loading</h3>
    return(
        <>
            <div className="container">
                <Detail {...item[0]}/>
            </div>
        </>
    )
}