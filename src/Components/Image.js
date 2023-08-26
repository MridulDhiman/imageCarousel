import React from "react";
import "./Image.css";

const Image = ({src, alt}) => {
      
    return (
        <div className="carousel-img-container">
        <img className="carousel-img"  src={src} alt={alt}   />
         </div>
    )
}

export default Image;