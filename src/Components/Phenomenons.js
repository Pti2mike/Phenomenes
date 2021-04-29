import React, { useState } from "react";
import AllEvolutions from "./AllEvolutions";
import "./Phenomenons.css";

import PhenomenonCard from "./PhenomenonCard";

// const Phenomenons = ({ data, setData }) => {
const Phenomenons = () => {
  const [selectedEvolID, setSelectedEvolID] = useState({});
  const [showDetails, setShowDetails] = useState(false);

  // Visibilité section all Evolutions
  const visibility = selectedEvolID._id ? "visible" : "hidden";

  return (
    <div
      style={{
        display: "flex",
        border: "solid gray",
        justifyContent: "space-around",
      }}
    >
      <div>
        <h3>Phénomènes</h3>
        <PhenomenonCard
          showDetails={showDetails}
          setShowDetails={setShowDetails}
        />
      </div>

      {/* <div style={{ visibility }}> */}
      <div>
        <AllEvolutions
          showDetails={showDetails}
          setShowDetails={setShowDetails}
        />
      </div>
    </div>
  );
};

export default Phenomenons;
