import React, { useState, useEffect } from "react";
import "./style.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const CartDetailList = ({img,title,price,stock,id}) =>{

    const {newQuantityShopSuma, newQuantityShopResta, eliminar} = useContext(CartContext)

    const borrar = () =>{
        eliminar({img,title,price,stock,id})
    }
    
    const sumar =()=>{
    newQuantityShopSuma(stock,id)
    }

    const restar =()=>{
    newQuantityShopResta(stock,id)
    }

    return(
       
            <div className="containerBoxCart">
                <ul>
                    <li><div><img src={img} alt="" srcset="" /></div></li>
                    <li><div className="title_container">{title}</div></li>
                    <li><div className="numero_container" onClick={borrar} >Eliminar</div></li>
                    <li> 
                        <div className="numero_container">
                            <button onClick={restar}>-</button>
                            <b>{stock}</b>
                            <button onClick={sumar}>+</button>
                        </div>
                    </li>
                    <li><div className="price_container">
                        <div className="unitary_price">Precio ${price}</div>
                        <div className="price">${stock*price}</div>
                        </div>
                    </li>
                </ul>
            </div>
        
    )
}