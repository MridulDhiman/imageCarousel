import React from "react";
import "./Image.css";

const Image = ({src, alt, isClicked, onClick, index}) => {

  
   
     const handleClick = () => {
        onClick(index);
     }
      
    return (
        <div class="carousel-img-container">
        <img class={`carousel-img ${isClicked && "active"}`}  src={src} alt={alt} onClick={handleClick}  />
        </div>
    )
}

export default Image;