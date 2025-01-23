import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FeedCard } from "./common/FeedCard";
import axios from "axios";
import { baseURL } from "../axios/instance";



export const FeedsPage = () => {
  const [cards, setCards] = useState([]);

  const fetchFeedData = async () => {
    try {
      const response = await axios.get(`${baseURL}/feed`, { withCredentials: true });
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
    <div className=" lg:h-full h-[80vh] w-full lg:place-items-center bg-customBlack overflow-hidden">
      <div className="grid lg:h-auto h-[80vh] lg:mt-[30px]">
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
      <div className="lg:relative md:relative absolute w-full bottom-[10vh] lg:bottom-2 md:botton-2 lg:w-[25vw] xmd:w-[30vw] xxmd:w-[30vw] h-[10vh] mt-[20px] flex flex-row gap-[10px]">
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

