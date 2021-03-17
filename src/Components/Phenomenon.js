import React, { useState } from "react";
import Territoires from "./Territoires";

const Phenomenon = () => {
  const phenomenons = [
    "...",
    "Douleur",
    "Coubatures",
    "Asthénie",
    "Vertiges",
    "Paresthésie",
    "Céphalée",
    "Autre",
  ];

  const [phenomenon, setPhenomenon] = useState("");

  const handleChange = (event) => {
    console.log("Phénomène selectionné");
    setPhenomenon(event.target.value);
  };

  return (
    <div>
      <form>
        <div>Nom du phénomène :</div>
        <select value={phenomenon} onChange={handleChange}>
          {phenomenons.map((pheno, index) => (
            <option key={index} value={pheno}>
              {pheno}
            </option>
          ))}
        </select>
      </form>
      <Territoires phenomenon={phenomenon} setPhenomenon={setPhenomenon} />
    </div>
  );
};

export default Phenomenon;
