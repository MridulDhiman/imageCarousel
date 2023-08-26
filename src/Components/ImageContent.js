import React, {useState} from "react";

import "./ImageContent.css";

const ImageContent = ({name, desc}) => {
    
    return (
    <div className="content-container">
     <h3 className="manga-name">{name}</h3>
     <p className="desc">{desc}</p>;
    </div>
    )

}

export default ImageContent;