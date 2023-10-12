import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ cardData }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={cardData.picture} alt={cardData.title} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{cardData.title}</h2>
        <p className="text-gray-500 text-base">{cardData.description}</p>
        <p className="text-lg font-bold mt-2">Price: ${cardData.price}</p>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full"
          onClick={() => navigate(`product/${cardData.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
