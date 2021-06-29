import React, { useState, useEffect } from "react";
import "./style.css";

export const Detail = ({img,title,price,cantidad}) => {
 /*  const num = cantidad */
  const [stock, setStock] = useState(0);
  const [numero, setNumero] = useState(0);

  const aumentar = () => {
    if (!stock <= 0) {
      console.log("Click Aumentar");
      setNumero(numero + 1);
      setStock(stock - 1);
    }
  };

  const reducir = () => {
    if (!numero <= 0) {
      console.log("Click Reducir");
      setNumero(numero - 1);
      setStock(stock + 1);
    }
  };
  
  const setear = (cantidad) =>{
    setStock(cantidad);
  }
  
  
  useEffect(()=>{
    setear(cantidad)
  },[])
    
  return (
    <>
      <div className="container_product">
        <img src={img} alt="" />
        <div className="info_container_product">
          <h1 className="title_product">{title}</h1>
          <p className="description_product">Precio ${price}</p>
          <h3 className="stock_product">Productos en Stock {cantidad}</h3>
          <div className="btn_container_product">
            <button onClick={reducir}> -</button>
            <div>{numero}</div>
            <button onClick={aumentar}>+</button>
          </div>
          <button className="btn_cart_product">Agregar al carrito</button>
        </div>
      </div>
    </>
  );
};
