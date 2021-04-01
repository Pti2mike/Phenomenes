import React, { useState } from "react";

const PainBar = ({ pain, setPain }) => {
  const onChangePain = (event) => {
    setPain(event.target.value);
  };

  return (
    <div>
      <div id="slidecontainer">
        <div>
          <label>Douleur : </label>
        </div>

        <div>
          <i id="douleur"></i>
          {pain}/10
        </div>
        <input
          type="range"
          className=""
          min="1"
          max="10"
          value={pain}
          onChange={onChangePain}
        />
      </div>
    </div>
  );
};

export default PainBar;
