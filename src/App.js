import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from "./Components/Image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import {Scrollbar, Mousewheel} from "swiper/modules";


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
  return (
   <>
   <Swiper
    scrollbar={{
      hide: false,
    }}
    spaceBetween={0}
    slidesPerView={3}
    mousewheel={true}
    modules={[Scrollbar, Mousewheel]}
    className="mySwiper"
   >
    {
      raw_data.map((image) => {
       return  <SwiperSlide>
              <Image src={image.image} alt={image.alt} />
        </SwiperSlide> 
      })
    }
   </Swiper>
   </>
  );
}

export default App;
