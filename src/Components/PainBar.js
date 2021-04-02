import React from "react";

const PainBar = ({ form, pain, handleChange }) => {
  return (
    <div>
      <div id="slidecontainer">
        <div>
          <label>Douleur : </label>
        </div>

        <div>
          <i id="douleur"></i>
          {form.douleur ? form.douleur : pain}/10
        </div>
        <input
          type="range"
          className=""
          min="1"
          max="10"
          value={form.douleur ? form.douleur : pain}
          onChange={(e) => {
            handleChange(e, "douleur");
          }}
        />
      </div>
    </div>
  );
};

export default PainBar;
