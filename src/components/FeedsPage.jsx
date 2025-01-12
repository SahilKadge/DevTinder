import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FeedCard } from "./common/FeedCard";
import axios from "axios";



export const FeedsPage = () => {
  const [cards, setCards] = useState([]);

  const fetchFeedData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/feed", { withCredentials: true });
      const data = response?.data?.data;
      setCards(data);
    } catch (error) {
      console.error("Error fetching feed data:", error);
    }
  };

  useEffect(() => {
    fetchFeedData(); // Fetch data only once when the component mounts
  }, []);

  return (
    <div className="h-full w-full lg:place-items-center bg-customBlack overflow-hidden">
      <div className="grid lg:h-auto h-[84%] lg:mt-[30px]">
        {cards.map((card) => (
          <FeedCard
            key={card._id}
            id={card._id} // Pass the unique ID from the API
            url={card.userProfile} // Pass the userProfile for the image
            cards={cards}
            card={card}
            setCards={setCards}
          />
        ))}
      </div>
      <div className="lg:w-[25vw] xmd:w-[30vw] xxmd:w-[30vw] h-[8%] mt-[20px] flex flex-row gap-[10px]">
        <button className="w-[50%] bg-customBlack border-[1px] border-customWhite text-customWhite h-[full] rounded-[10px]">
          Ignore
        </button>
        <button className="w-[50%] bg-gradient-to-right text-customWhite h-[full] rounded-[10px]">
          Like
        </button>
      </div>
    </div>
  );
};

