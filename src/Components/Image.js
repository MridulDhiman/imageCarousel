import React from "react";
import "./Image.css";
import ImageContent from "./ImageContent";


const Image = ({src, alt, name, desc}) => {
      
    return (
        <div className="carousel-img-container">
        <img className="carousel-img"  src={src} alt={alt}   />
        <ImageContent name={name} desc={desc}/>
         </div>
    )
}

export default Image;