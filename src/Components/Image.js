import React from "react";
import "./Image.css";

const Image = ({src, alt}) => {
      
    return (
        // <div class="carousel-img-container">
        <img className={`carousel-img`}  src={src} alt={alt}   />
        // </div>
    )
}

export default Image;