import React from "react";
import "./Image.css";
import ImageContent from "./ImageContent";


const Image = ({src, alt, name, isActive, index, desc ,onClick}) => {
      
    const handleClick = () => {
          onClick(index);
    }
    return (
        <div className={`carousel-img-container ${isActive && "active"}`}>
        <img className="carousel-img"  src={src} alt={alt}  onClick={handleClick} />
        <ImageContent name={name} desc={desc}/>
         </div>
    )
}

export default Image;