

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../../axios/instance";
export const FeedCard = ({ id, url, setCards, card, cards }) => {
  const [status, setStatus] = useState('')
  const handleStatusOnDrag = async (status, toUserId) => {
    try {
      const response = await axios.post(
        `${baseURL}/request/send/${status}/${toUserId}`,
        {},
        { withCredentials: true } // Enable sending cookies
      );
      console.log("Response from API:", response);
    } catch (error) {
      console.error("Error handling swipe action:", error);
      alert("Failed to send request. Please try again.");
    }
  };
  
  
  const x = useMotionValue(0); // Track x position
  const rotate = useTransform(x, [-450, 450], [-15, 15]); // Rotate based on x
  const opacity = useTransform(x, [-450, 0, 450], [0.8, 1, 0.8]); // Fade out on drag

  // Determine if this card is the front-most card
  const isFront = id === cards[cards.length - 1]._id;

  const handleDragEnd = () => {
    const threshold = 250; // Drag distance threshold
    if (x.get() > threshold) {
      // Animate out to the right
      animate(x, 1000, {
        duration: 0.5,
        onComplete: () => {
          setCards((prev) => prev.filter((card) => card._id !== id));
          handleStatusOnDrag('interested', id); // Call API after animation
        },
      });
      
      console.log("righttttttttttttt", id)
      
    } else if (x.get() < -threshold) {
      // Animate out to the left
      animate(x, -1000, {
        duration: 0.5,
        onComplete: () => {
          setCards((prev) => prev.filter((card) => card._id !== id));
          handleStatusOnDrag('ignored', id); // Call API after animation
        },
      })
      
    } else {
      // Snap back to the original position
      animate(x, 0);
    }
  };

  return (
    <motion.div
    // src={url} // Use the URL passed from FeedsPage
    // alt={`${id}`}
      className={`relative  lg:h-[80vh] lg:w-[25vw] w-full h-full  xxmd:w-[30vw] xmd:w-[30vw] rounded-lg object-cover hover:cursor-grab active:cursor-grabbing`}
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        rotate,
        opacity,
        backgroundImage: `url(${url})`, 
        backgroundPosition: "center",
        backgroundSize: "cover", 
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      drag={isFront ? "x" : false} // Allow drag for top card only
      dragConstraints={{ left: -450, right: 450 }} // Set drag limits
      onDragEnd={handleDragEnd}
      dragMomentum={false} // Disable momentum to avoid card moving unpredictably
    > 
      <div className="h-[60%] w-full absolute bottom-0 left-0 bg-gradient-to-t rounded-lg from-black/100 to-black/0"></div>
      <div className="absolute bottom-2 pl-4 pb-4 left-2 text-white">
        <div className="text-[18px]">{card.firstName}  {card.lastName} </div>
        <div className="text-[14px] "> Age : {card.age} </div>
      </div>
    </motion.div>
  );
};
