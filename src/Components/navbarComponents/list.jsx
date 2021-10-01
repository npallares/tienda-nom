import "./navbar.css";
import chango from "./assets/chango.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";
import nikeIcon from "../../assets/icons/nike_icon.png";
import topperIcon from "../../assets/icons/topper_icon.png";
import adidasIcon from "../../assets/icons/adidas_icon.png";
import { LoginButton } from "../loginComponents/LoginButton";
import { LogoutButton } from "../loginComponents/LogoutButton";

export const ListModule = ({ navActive, handleOpenNav, widthScreen }) => {
  
  const { cartQuantity } = useContext(CartContext);
  useEffect(() => {
    // seteo de span ref. al numero del cart
    const setSpan = () => {
      const $span = document.getElementById("itemQuantity");
      if (cartQuantity > 0) {
        $span.classList.remove("none");
      } else {
        $span.classList.add("none");
      }
    };
    setSpan();
  }, [cartQuantity, widthScreen]);

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <ul className={navActive ? "responsive isActive" : "responsive"}>
        <Link to={`/nike`}>
          <li onClick={() => handleOpenNav()}>
            <img src={nikeIcon} alt="Nike" className="icons" />
            {widthScreen < 700 ? (
              <span className="nameCategory">Nike</span>
            ) : (
              ""
            )}
          </li>
        </Link>
        <Link to={`/adidas`}>
          <li onClick={() => handleOpenNav()}>
            <img src={adidasIcon} alt="Adidas" className="icons" />
            {widthScreen < 700 ? (
              <span className="nameCategory">Adidas</span>
            ) : (
              ""
            )}
          </li>
        </Link>
        <Link to={`/topper`}>
          <li onClick={() => handleOpenNav()}>
            <img src={topperIcon} alt="Topper" className="icons" />
            {widthScreen < 700 ? (
              <span className="nameCategory">Topper</span>
            ) : (
              ""
            )}
          </li>
        </Link>
        <Link to={`/cart`}>
          <li onClick={() => handleOpenNav()}>
            <img src={chango} className="chango" alt="chango" />
            <span className="itemQuantity none" id="itemQuantity">
              {cartQuantity}
            </span>
          </li>
        </Link>
      </ul>
    </>
  );
};
