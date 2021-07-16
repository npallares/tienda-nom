import React, { useState, useEffect } from "react";
import "./style.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const CartDetailList = ({img,title,price,stock}) =>{
    return(
        <div className="container_cart">
            <div className="containerBoxCart">
                <div><img src={img} alt="" srcset="" /></div>
                <div className="title_container">{title}</div>
                <div className="numero_container">Precio Unitario <b>${price}</b></div>
                <div className="numero_container">Cantidad: <b>{stock}</b></div>
                <div className="price_container">Total <b>${stock*price}</b></div>   
            </div>
        </div>
    )
}