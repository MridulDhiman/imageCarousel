import React from "react";
import ImageList from "./Components/ImageList";

const raw_data = [
  {
    image: "onepiece.png",
    alt: "One Piece",
    id: 1,
    desc: "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it.",
  },
  {
    image: "demonslayer.jpg",
    alt: "Demon Slayer",
    desc: "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night.",
    id: 2,
  },
  {
    image: "vagabond.jpg",
    alt: "Vagabond",
    desc: "In 16th-century Japan, Shinmen Takezou is a wild, rough young man, in both his appearance and his actions. His aggressive nature has won him the collective reproach and fear of his village, leading him and his best friend, Matahachi Honiden, to run away in search of something grander than provincial life. The pair enlist in the Toyotomi army, yearning for glory—but when the Toyotomi suffer a crushing defeat at the hands of the Tokugawa Clan at the Battle of Sekigahara, the friends barely make it out alive.",
    id: 3, 
  },
  {
    image: "bleach.jpg",
    alt: "Bleach",
    id: 4,
    desc: "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant. To save his family, Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper as a result.",
  }, 
  {
    image: "zom100.jpg",
    alt: "ZOM 100",
    desc: "After graduating from a top university with an impressive extracurricular record in the rugby club, Akira Tendou has nailed every step of the way to securing his dream job. On top of that, a beautiful and kind co-worker always brightens his day in the office! Life seems to be going very well for Akira until he slowly realizes that sleepless nights and brutal work are his new reality.",
    id: 5,
  }, 
   {
    image: "drstone.jpg",
    alt: "Dr. Stone",
    desc: "After five years of harboring unspoken feelings, high-schooler Taiju Ooki is finally ready to confess his love to Yuzuriha Ogawa. Just when Taiju begins his confession however, a blinding green light strikes the Earth and petrifies mankind around the world—turning every single human into stone.",
    id: 6,
   }
]

function App() {

   
  return (
    <ImageList items={raw_data}/>
  );
}

export default App;
