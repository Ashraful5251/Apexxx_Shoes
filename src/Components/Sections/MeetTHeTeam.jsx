import React from "react";
import teamData from "../data/meetTheTeam.json";

function MeetTheTeam() {
  return (
    <div className="bg-white text-black">
      <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamData.map((member, index) => (
          <div key={index} className="bg-gray-300 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.expertise}</p>
            <p className="mt-2">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeetTheTeam;
