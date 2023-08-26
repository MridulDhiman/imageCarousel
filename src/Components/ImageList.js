import React from "react";
import Image from "./Image";

import "./ImageList.css"


const ImageList = ({items}) => {
    return (
        <div className="carousel">
        {
            items.map((image) => {
                return <Image key={image.id} src={image.image} alt={image.alt} name={image.alt} desc={image.desc} />
               })
        }
        </div>
    )
}

export default ImageList;