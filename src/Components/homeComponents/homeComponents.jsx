import React from "react";
import CarrousellComponent from "./CarrousellComponent";

import "./home.css";
import ListCategories from "./ListCategories";

export const HomeComponents = () => {
  return (
    <>
      <div className="homeContainer">
        
          <CarrousellComponent autoplay={true} />
          <ListCategories/>
      </div>
    </>
  );
};
