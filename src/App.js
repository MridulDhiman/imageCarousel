import React from "react";
import ImageList from "./Components/ImageList";

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
    <ImageList items={raw_data}/>
  );
}

export default App;
