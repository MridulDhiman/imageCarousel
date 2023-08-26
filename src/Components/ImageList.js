import React, {useState} from "react";
import Image from "./Image";

import "./ImageList.css"


const ImageList = ({items}) => {
    const n = items.length;
    const [isImageClicked, setIsImageClicked] = useState(new Array(n).fill(false));
    const [prevIndex, setPrevIndex] = useState(0);
    // const [isInit, setIsInit] = useState(true);
   

    const handleClick = (index) => {
        console.log(index);
       setIsImageClicked((prev_state) => {
         let new_state = prev_state;
         new_state[prevIndex] = false; 
         new_state[index] = true;// toggle 
         return new_state;
       });

       setPrevIndex(index);
    }
    
    const finalList = items.map((image, index) => {
        return {
            ...image,
            isActive: isImageClicked[index],
        }

    })
    
    return (
        <div className="carousel">
        {
            finalList.map((image, index) => {
                return <Image key={image.id} src={image.image} index={index} alt={image.alt} name={image.alt} desc={image.desc} isActive={image.isActive} onClick={handleClick} />
               })
        }
        </div>
    )
}

export default ImageList;