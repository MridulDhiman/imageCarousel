import React, {useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from "./Components/Image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./App.css"



// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';


// import ImageContainer from "./Components/ImageContainer";
const raw_data = [
  {
    image: "onepiece.png",
    alt: "onepiece",
    id: 1,
  },
  {
    image: "demonslayer.jpg",
    alt: "demonslayer",
    id: 2,
  },
  {
    image: "vagabond.jpg",
    alt: "vagabond",
    id: 3, 
  },
  {
    image: "bleach.jpg",
    alt: "bleach",
    id: 4,
  }, 
  {
    image: "zom100.jpg",
    alt: "zom100",
    id: 5,
  }, 
   {
    image: "drstone.jpg",
    alt: "drstone",
    id: 6,
   }
]

function App() {
  const n = raw_data.length;

  const [isPostClicked, setIsPostClicked] = useState(new Array(n).fill(false));
  const [prevClicked, setPrevClicked] = useState(-1);
  const [count,setCount] = useState(0);

  const handleClick = (index) => {
          setIsPostClicked((prev_state) => {
            let new_state = prev_state;
            new_state[index] = true;
            if(prevClicked!== -1) {
              new_state[prevClicked] = false;
            }
            return new_state;
          })
           if(count === 0) {
            setPrevClicked(-1);
           }
           else {
             setPrevClicked(index);
           }
           setCount(count+1);
  }

  const new_data = raw_data.map((post, index) => {
              return {
                ...post,
                isClicked: isPostClicked[index]
              }
  })
  return (
    // <div class='image-container'>
    //   {
    //     new_data.map((image, index) => {
    //       return (
    //        
    //       )
    //     })
    //   }
   
    // </div>
    <>
    <Swiper direction={'horizontal'}
        slidesPerView={2}
        spaceBetween={3}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        >
          {
            new_data.map((image, index) => {
              return (
                <SwiperSlide>
                    <Image src = {image.image} alt = {image.alt} index={index} key ={image.id} isClicked={image.isClicked} onClick={handleClick} />
                </SwiperSlide>
              )
            })
          }

    </Swiper>
    </>
  );
}

export default App;
