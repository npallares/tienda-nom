import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

import "./style.css";

export const Detail = ({img,title,price,cantidad,id}) => {

  
  const [stock, setStock] = useState(0);
  const [numero, setNumero] = useState(0);

  const {addToCart} = useContext(CartContext)

  console.log(cantidad)
  

  const agregar=()=>{

      addToCart({
        id,price,title,img,cantidad:numero
      })

  }


  const aumentar = () => {
    if (!stock <= 0) {
      console.log("Click Aumentar");
      setNumero(numero + 1);
      setStock(stock - 1);
    }else{alert("No se admite cantidad mayor al stock")}
  };

  const reducir = () => {
    if (!numero <= 0) {
      console.log("Click Reducir");
      setNumero(numero - 1);
      setStock(stock + 1);
    } else{alert("No se admite cantidad negativa - ")}
  };
  
  const setear = (cantidad) =>{
    setStock(cantidad);
  }
  
  useEffect(()=>{
    setear(cantidad);
      
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
            <div>{numero}</div>
            <button onClick={aumentar}>+</button>
          </div>
          <button id="btn"className="btn_cart_product" onClick={agregar}>Agregar al carrito</button>
          <div id="finalizada"className="compra-finalizada none">COMPRA FINALIZADA</div>
        </div>
      </div>
    </>
  );
};
