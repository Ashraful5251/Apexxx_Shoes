import React from "react";
import Map from "./Map";
import StoreLocations from "./StoreLocations";

const FindStorePage = () => {
  return (
    <div className="flex">
      <div className="w-1/4">
        <h3 className="text-lg font-semibold">Find an Apex Store:</h3>
        {/* Add your search field and dropdowns here */}
        <StoreLocations />
      </div>
      <div className="w-3/4">
        <Map
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    </div>
  );
};

export default FindStorePage;
