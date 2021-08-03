import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

import "./style.css";

export const Detail = ({img,title,price,id,stock}) => {

  const [number, setNumber] = useState(0);
  const {cart, addToCart, corroborateStock,itemsQuantity} = useContext(CartContext)

  const setNewStock =()=>{
    const newQuantity = cart.find(el=>el.id===id)
    if(newQuantity){
      const quantity = newQuantity.stock
      setNumber(quantity)
    }
  }
  
  
  const agregar=()=>{
      addToCart({
        id,price,title,img,stock:number
      })

      corroborateStock({id,stock})

      itemsQuantity({number,id,stock})

      
      alert("Agregaste este producto al carrito")
  }

  const aumentar = () => {
    if (number < stock) {
      console.log("Click Aumentar");
      setNumber(number + 1);
      
      
    }else{alert("No se admite cantidad mayor al stock")}
  };

  const reducir = () => {
    if (number > 0) {
      console.log("Click Reducir");
      setNumber(number- 1);
      
      
    } else{alert("No se admite cantidad negativa - ")}
  };
  
  useEffect(()=>{
    setNewStock();

  },[])
    
  return (
    <>
      <div className="container_product">
        <div className="container_img">
          <img src={img} alt="" />
        </div>  
        <div className="info_container_product">
          <h1 className="title_product">{title}</h1>
          <p className="description_product">Precio $ {price}</p>
          <h3 className="stock_product">Productos en Stock: {stock}</h3>
          <div className="btn_container_product">
          <button onClick={reducir}> -</button>
            <div>{number}</div>
            <button onClick={aumentar}>+</button>
          </div>
          <button id="btn"className="btn_cart_product" onClick={agregar}>Agregar al carrito</button>
          <div id="finalizada"className="compra-finalizada none">COMPRA FINALIZADA</div>
        </div>
      </div>
    </>
  );
};
