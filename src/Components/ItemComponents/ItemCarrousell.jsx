import React, { useState, useEffect } from "react";

const ItemCarrousell = (props) => {

    const images = props.images
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    
  const selectNewImage = (index, images, next = true) => {
    
    const condition = next ? (selectedIndex < images.length - 1) : (selectedIndex > 0);
    const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : images.length - 1);
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  useEffect(() => {
    if(props.autoplay){
      const interval = setInterval(() => {
          selectNewImage(selectedIndex, images);
      }, 6000);
      return() => clearInterval(interval)
    }
});

  const previous = () => {
    selectNewImage(selectedImage, images, false);
  };

  const next = () => {
    selectNewImage(selectedImage, images);
  };

  

  return (
    <div className="slider-container-item"  >
      <img
        src={require(`../../assets/images/${selectedImage}`).default}
        alt="slider" 
        className="slider-item"       
      />

      <div className="slider-container-boton">
        <span onClick={previous} className="slider-boton ">{`<`}</span>
        <span onClick={next} className="slider-boton">{`>`}</span>
      </div>
      
    </div>
  );
};

export default ItemCarrousell;
