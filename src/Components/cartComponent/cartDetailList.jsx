import React, { useState, useEffect } from "react";
import "./style.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const CartDetailList = ({img,title,price,numero}) =>{
    return(
        <div className="container_cart">
            <div className="containerBox">
                <div><img src={img} alt="" srcset="" /></div>
                <div className="title_container">{title}</div>
                <div className="numero_container">Precio Unitario: {price}</div>
                <div className="numero_container">Cantidad: {numero}</div>
                <div className="price_container">Total ${numero*price}</div>
                
            </div>
        </div>
    )
}