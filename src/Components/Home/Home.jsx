import React from "react";
import Banner from "../Banner/Banner";
import cardData from "../data/data.json";
import Card from "../Sections/Card";
import MeetTheTeam from "../Sections/MeetTHeTeam";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card key={index} cardData={card} />
        ))}
      </div>
      <MeetTheTeam></MeetTheTeam>
    </div>
  );
};

export default Home;
