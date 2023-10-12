import React from "react";

const storeLocations = [
  { name: "Store 1", lat: 40.7128, lng: -74.006 }, // Example coordinates
  // Add more store locations here
];

const StoreLocations = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold">Store Locations:</h3>
      <ul>
        {storeLocations.map((location, index) => (
          <li key={index}>
            {location.name}
            <br />
            Lat: {location.lat}, Lng: {location.lng}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreLocations;
