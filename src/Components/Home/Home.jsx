import React from "react";
import Banner from "../Banner/Banner";
import DealOfDay from "../Sections/DealOfDay";
import FlashSale from "../Sections/FlashSale";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <DealOfDay></DealOfDay>
      <FlashSale></FlashSale>
    </div>
  );
};

export default Home;
